import React from 'react';
import { render, screen } from '@/test/utils';
import { ErrorBoundary } from './ErrorBoundary';

describe('ErrorBoundary', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('renders text', () => {
    const Child = () => {
      throw new Error();
    };
    render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>,
    );
    const errorTitle = screen.getByText('Something went wrong!');
    expect(errorTitle).toBeDefined();
  });
});
