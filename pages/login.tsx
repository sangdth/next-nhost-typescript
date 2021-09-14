import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@nhost/react-auth';
import Link from 'next/link';
import {
  Alert,
  AlertIcon,
  Button,
  Flex,
  Stack,
  Text,
  Logo,
  Input,
} from '@/components';
import { auth } from '@/lib/nhost';
import { APP_NAME } from '@/lib/constants';

export default function Login() {
  const router = useRouter();
  const { signedIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      await auth.login({ email, password });
    } catch (err) {
      console.warn(err);
      setError('Login failed, please try again');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function goToHome() {
      return router.push('/');
    }
    if (signedIn && !loading && !error) {
      goToHome();
    }
  }, [router, signedIn, loading, error]);

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      width="300px"
      height={error ? '350px' : '300px'}
      marginX="auto"
      marginTop="100px"
    >
      <Logo label={APP_NAME} />

      <Stack spacing="10px" alignItems="center">
        <Text
          as="h2"
          fontSize="2xl"
          color="gray"
          fontWeight="bold"
        >
          Login
        </Text>

        {error && (
          <Alert status="error" variant="subtle" fontSize="xs">
            <AlertIcon />
            {error}
          </Alert>
        )}

        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          isFullWidth
          isLoading={loading}
          disabled={!email || !password}
          variant="solid"
          colorScheme="green"
          onClick={handleSubmit}
        >
          Login
        </Button>
        <Link href="/signup">
          Sign up
        </Link>
      </Stack>
    </Flex>
  );
}
