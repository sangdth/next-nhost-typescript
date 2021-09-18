import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider as JotaiProvider } from 'jotai';
import { NhostAuthProvider } from '@nhost/react-auth';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { ChakraProvider } from '@chakra-ui/react';
import { auth } from '@/lib/nhost';
import { GRAPHQL_ENDPOINT } from '@/lib/constants';

const AllTheProviders: FC = ({ children }) => {
  return (
    <JotaiProvider>
      <NhostAuthProvider auth={auth}>
        <NhostApolloProvider auth={auth} gqlEndpoint={GRAPHQL_ENDPOINT}>
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </NhostApolloProvider>
      </NhostAuthProvider>
    </JotaiProvider>
  );
};

const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { renderWithProviders };
