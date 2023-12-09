import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { useShow } from '../hooks/useShow';

afterEach(cleanup);

describe('useShow hook', () => {
  it('renders null when show is false', () => {
    const Component: React.FC = () => {
      const value = useShow(false);

      return <div>{value === null ? 'null' : value.toString()}</div>;
    };

    const { container } = render(<Component />);

    expect(container.textContent).toBe('null');
  });

  it('renders true when show is true', () => {
    const Component: React.FC = () => {
      const value = useShow(true);

      return <div>{value === null ? 'null' : value.toString()}</div>;
    };

    const { container } = render(<Component />);

    expect(container.textContent).toBe('true');
  });

  it('renders null after timeout when show is false', async () => {
    jest.useFakeTimers();

    const Component: React.FC = () => {
      const value = useShow(false);

      return <div>{value === null ? 'null' : value.toString()}</div>;
    };

    const { container } = render(<Component />);

    expect(container.textContent).toBe('null');

    jest.advanceTimersByTime(1000); // Assuming timeout is set to 1000 ms

    expect(container.textContent).toBe('null');

    jest.useRealTimers();
  });
});
