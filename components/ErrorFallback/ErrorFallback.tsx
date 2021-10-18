import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Divider,
  Flex,
} from '@chakra-ui/react';

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: (...args: Array<unknown>) => void;
};

export const ErrorFallback = (props: ErrorFallbackProps) => {
  const { error, resetErrorBoundary } = props;

  return (
    <Flex width="100%" height="100%">
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="100%"
      >
        <AlertIcon boxSize="40px" mr={0} />

        <AlertTitle mt={4} mb={1} fontSize="lg">
          Something went wrong!
        </AlertTitle>

        <AlertDescription maxWidth="sm">
          {error.message}
        </AlertDescription>

        <Divider marginY="12px" />

        <Button onClick={resetErrorBoundary}>
          Try again
        </Button>
      </Alert>
    </Flex>
  );
};
