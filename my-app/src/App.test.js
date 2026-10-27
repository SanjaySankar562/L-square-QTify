import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the QTify landing page', () => {
  render(<App />);
  expect(screen.getByText(/100 thousand songs, ad-free/i)).toBeInTheDocument();
  expect(screen.getByRole('searchbox', { name: /search/i })).toBeInTheDocument();
});
