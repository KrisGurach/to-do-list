import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import HomePage from '@/app/page'; // Change the path accordingly

const mockStore = configureStore();
const store = mockStore({ tasks: { tasks: [] } }); // Provide an initial state if needed

test("Test HomePage", () => {
  render(
    <Provider store={store}>
      <HomePage />
    </Provider>
  );

  // Your test logic here (e.g., checking if the title is rendered)
});