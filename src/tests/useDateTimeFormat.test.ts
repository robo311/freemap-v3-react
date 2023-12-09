// useDateTimeFormat.test.ts
import { renderHook } from '@testing-library/react-hooks';
import { useAppSelector } from '../hooks/reduxSelectHook';
import { useDateTimeFormat } from '../hooks/useDateTimeFormat';

jest.mock('../hooks/reduxSelectHook', () => ({
  useAppSelector: jest.fn(),
}));

describe('useDateTimeFormat', () => {
  it('returns a formatted date string based on language and options', () => {
    // Mock the language value returned by useAppSelector
    (useAppSelector as jest.Mock).mockReturnValue('en-US');

    // Define the options you want to test
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    // Render the hook with the provided options
    const { result } = renderHook(() => useDateTimeFormat(options));

    // Get the current date
    const currentDate = new Date();

    // Format the date using the hook result
    const formattedDate = result.current.format(currentDate);

    // Create the expected formatted date using Intl.DateTimeFormat directly
    const expectedFormattedDate = new Intl.DateTimeFormat(
      'en-US',
      options,
    ).format(currentDate);

    // Assert that the formatted date matches the expected formatted date
    expect(formattedDate).toEqual(expectedFormattedDate);
  });

  // Add more test cases as needed
});
