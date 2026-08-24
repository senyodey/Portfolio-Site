import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero heading', () => {
  render(<App />);
  const heading = screen.getByText(/full stack developer/i);
  expect(heading).toBeInTheDocument();
});
