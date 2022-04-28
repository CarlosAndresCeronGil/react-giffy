import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', async () => {
  const { findByText } = render(<App />);
  // const linkElement = await screen.findByText(/Ultima busqueda/i);
  // const linkElement = await findByText(/Ultima busqueda/i);
  const linkElement = await findByText('Ultima busqueda');
  expect(linkElement).toBeInTheDocument();
});

test.only('search form could be used', async () => {
  render(<App />)
  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')
  
  fireEvent.change(input, { target:  { value: 'Matrix'} })
  fireEvent.click(button)

  const title = await screen.findByText('Matrix')
  expect(title).toBeVisible()
})