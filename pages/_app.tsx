// Global CSS can not import from other than this custom App
import '@/styles/globals.css';
import React from 'react';
import { Provider as JotaiProvider } from 'jotai';
import { NhostAuthProvider } from '@nhost/react-auth';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { ChakraProvider } from '@chakra-ui/react';
import { auth } from '@/lib/nhost';
import { GRAPHQL_ENDPOINT } from '@/lib/constants';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <JotaiProvider>
      <NhostAuthProvider auth={auth}>
        <NhostApolloProvider auth={auth} gqlEndpoint={GRAPHQL_ENDPOINT}>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </NhostApolloProvider>
      </NhostAuthProvider>
    </JotaiProvider>
  );
}
export default MyApp;
