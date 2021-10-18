import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '@/components';

type ErrorBoundaryProps = {
  children: React.ReactNode;
  handleError?: React.ComponentProps<typeof ReactErrorBoundary>['onError'];
};

export const ErrorBoundary = (props: ErrorBoundaryProps) => {
  const { children, handleError } = props;

  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={handleError}
    >
      {children}
    </ReactErrorBoundary>
  );
};
