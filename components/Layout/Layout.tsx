import React from 'react';
import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import { APP_NAME } from '@/lib/constants';

export type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={''} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction="column">
        <Flex>{children}</Flex>
      </Flex>
    </>
  );
};

export default Layout;
