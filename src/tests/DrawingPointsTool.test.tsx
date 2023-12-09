// DrawingPointsTool.test.tsx
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { DrawingPointsTool } from '../components/DrawingPointsTool';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('DrawingPointsTool Component', () => {
  it('dispatches drawingPointAdd and drawingMeasure on map click', () => {
    const store = mockStore({
      main: {
        drawingColor: 'red', // Set an initial drawing color if needed
      },
    });

    render(
      <Provider store={store}>
        <DrawingPointsTool />
      </Provider>,
    );

    // Simulate a map click
    fireEvent.click(screen.getByTestId('map')); // Assuming there is a map with data-testid="map"

    // Assertion: Check if the dispatch function is called with drawingPointAdd and drawingMeasure actions
    const dispatchedActions = store.getActions();

    expect(dispatchedActions).toContainEqual(
      expect.objectContaining({
        type: 'DRAWING_POINT_ADD', // Replace with the actual action type
        payload: {
          lat: expect.any(Number),
          lon: expect.any(Number),
          color: 'red', // Replace with the actual color value
        },
      }),
    );

    expect(dispatchedActions).toContainEqual(
      expect.objectContaining({
        type: 'DRAWING_MEASURE', // Replace with the actual action type
        payload: {},
      }),
    );
  });
});
