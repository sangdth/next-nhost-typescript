import React, { useMemo } from 'react';
import {
  Heading,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useAuth } from '@nhost/react-auth';

type LogoProps = {
  label: string;
  preview?: boolean;
  size?: 'huge' | 'default' | 'small';
};

export const Logo = (props: LogoProps) => {
  const {
    label,
    preview = false,
    size = 'default',
  } = props;
  const { signedIn } = useAuth();

  const href = signedIn ? '/home' : '/';

  const styles = useMemo(() => {
    switch (size) {
    case 'huge':
      return {
        width: 'auto',
        height: 'auto',
        size: '4xl',
      };
    case 'small':
      return {
        width: 100,
        height: 'auto',
        size: 'xs',
      };
    default:
      return {
        width: 150,
        height: 36,
        size: 'md',
      };
    }
  }, [size]);

  return (
    <LinkBox
      textAlign="center"
      style={{ pointerEvents: preview ? 'none' : 'auto' }}
    >
      <NextLink passHref href={href}>
        <LinkOverlay>
          <Heading size={styles.size} fontWeight="bold">
            {label}
          </Heading>
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  );
};

export default Logo;
