import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { useAuth } from '@nhost/react-auth';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { auth } from '@/lib/nhost';
import { meAtom } from '@/lib/jotai';
import { GET_SELF } from '@/lib/graphqls';
import type { UserData } from '@/lib/types';

export function PrivateRoute<P>(Component: React.ComponentType<P>) {
  return function WrapperComponent(props: P) {
    const router = useRouter();
    const { signedIn } = useAuth();
    const [me, setMe] = useAtom(meAtom);

    const { loading, data } = useQuery<UserData>(GET_SELF, {
      variables: {
        user_id: auth.getClaim('x-hasura-user-id'),
      },
      context: {
        headers: {
          'x-hasura-role': 'me',
        },
      },
    });

    const meData = data?.users_by_pk;

    useEffect(() => {
      if (!me && meData) {
        setMe(meData);
      }
    }, [me, setMe, meData]);

    if (signedIn === null && loading) {
      return <div>Checking auth...</div>;
    }

    if (!signedIn) {
      router.push('/login');
      return <div>Redirecting...</div>;
    }
    return <Component {...props} />;
  };
}

export default PrivateRoute;
