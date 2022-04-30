import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import state from './redux/state/state';
import store from './redux/state/state';

test('renders learn redux link', () => {
  render(<App store={store}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
