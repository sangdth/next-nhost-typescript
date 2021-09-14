import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuth } from '@nhost/react-auth';
import { Flex } from '@/components';
import { APP_NAME, APP_DESCRIPTION } from '@/lib/constants';

function Index() {
  const router = useRouter();
  const { signedIn } = useAuth();

  if (signedIn) {
    router.push('/home');
    return <div>Redirecting...</div>;
  }

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex direction="column" width="100%" padding="20px">
        This is landing page
      </Flex>
    </>
  );
}

export default Index;
