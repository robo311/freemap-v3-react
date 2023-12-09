// CopyrightButton.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // You might need to install this package
import { CopyrightButton } from '../components/CopyrightButton';

// Mock the dependencies
jest.mock('fm3/actions/mainActions', () => ({
  documentShow: jest.fn(),
  setActiveModal: jest.fn(),
}));

jest.mock('fm3/hooks/reduxSelectHook', () => ({
  useAppSelector: jest.fn(),
}));

jest.mock('fm3/l10nInjector', () => ({
  useMessages: jest.fn(() => ({
    main: {
      copyright: 'Copyright',
    },
    mainMenu: {
      mapLegend: 'Map Legend',
    },
  })),
}));

jest.mock('../components/useAttributionInfo', () => ({
  useAttributionInfo: jest.fn(),
}));

const mockStore = configureStore([]);

describe('CopyrightButton', () => {
  it('renders without errors', () => {
    const store = mockStore({
      l10n: { language: 'en' }, // You might need to adjust the state based on your application's structure
      map: { mapType: 'O' }, // You might need to adjust the state based on your application's structure
    });

    render(
      <Provider store={store}>
        <CopyrightButton />
      </Provider>,
    );

    // Check if the component renders without errors
    expect(screen.getByTestId('copyright-button')).toBeInTheDocument();
  });

  it('opens the menu when button is clicked', () => {
    const store = mockStore({
      l10n: { language: 'en' },
      map: { mapType: 'O' },
    });

    render(
      <Provider store={store}>
        <CopyrightButton />
      </Provider>,
    );

    // Check if the menu is initially closed
    expect(screen.queryByTestId('popover-copyright')).not.toBeInTheDocument();

    // Click the button to open the menu
    fireEvent.click(screen.getByTestId('copyright-button'));

    // Check if the menu is now open
    expect(screen.getByTestId('popover-copyright')).toBeInTheDocument();
  });

  // Add more test cases as needed to cover different scenarios and interactions
});
