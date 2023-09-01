import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  
  // так тоже будет выбивать ошибку 
  // screen.getByRole('list');
  expect(screen.getByRole('list')).toBeInTheDocument();
});
