import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@nhost/react-auth';
import { auth } from '@/lib/nhost';
import { Link, Flex, Heading, Stack } from '@/components';
import { APP_NAME, APP_DESCRIPTION } from '@/lib/constants';

function Index() {
  const router = useRouter();
  const { signedIn } = useAuth();

  const handleLogout = async () => {
    await auth.logout();

    return router.push('/login');
  };
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex direction="column" width="100%" padding="20px">
        <Heading>My App</Heading>

        {!signedIn ? (
          <Stack>
            <Link as={NextLink} href="/login">
              Login
            </Link>

            <Link as={NextLink} href="/signup">
              Signup
            </Link>
          </Stack>
        ) : (
          <Stack>
            <Link as={NextLink} href="/users">
              Users dashboard
            </Link>
            <Link onClick={handleLogout}>
              Logout
            </Link>
          </Stack>
        )}
      </Flex>
    </>
  );
}

export default Index;
