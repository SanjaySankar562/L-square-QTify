import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the QTify landing page', () => {
  // MemoryRouter provides routing context without requiring a browser URL.
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  // Verify the primary landing-page content and navigation action are present.
  expect(screen.getByText(/100 thousand songs, ad-free/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/search a song of your choice/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /give feedback/i })).toBeVisible();
});
