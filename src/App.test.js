import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the NGO management system', () => {
  render(<App />);
  const headingElement = screen.getByText(/Dashboard Overview/i);
  expect(headingElement).toBeInTheDocument();
});