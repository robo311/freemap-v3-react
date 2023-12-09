// ToolMenu.test.tsx
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { ToolMenu } from '../components/ToolMenu';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('ToolMenu Component', () => {
  it('renders correctly and dispatches setTool with null on close button click', () => {
    const store = mockStore({
      main: {
        tool: 'some-tool', // Set an initial tool if needed
      },
    });

    render(
      <Provider store={store}>
        <ToolMenu />
      </Provider>,
    );

    // Assertion: Check if the ToolMenu is rendered
    expect(screen.getByTestId('tool-menu')).toBeInTheDocument();

    // Interaction: Simulate a click on the close button
    fireEvent.click(screen.getByTitle('Close [Esc]'));

    // Assertion: Check if the dispatch function is called with setTool action
    const dispatchedActions = store.getActions();

    expect(dispatchedActions).toContainEqual(
      expect.objectContaining({
        type: 'SET_TOOL', // Replace with the actual action type
        payload: null,
      }),
    );
  });
});
