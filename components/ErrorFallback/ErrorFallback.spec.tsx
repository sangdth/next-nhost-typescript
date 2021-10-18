import React from 'react';
import { render, screen } from '@/test/utils';
import { ErrorFallback } from './ErrorFallback';

describe('ErrorFallback', () => {
  it('renders text', () => {
    const testError = new Error('somethingsomething');
    const resetFn = jest.fn();

    render(<ErrorFallback error={testError} resetErrorBoundary={resetFn} />);
    expect(screen.getByText('somethingsomething')).toBeDefined();
  });
});
