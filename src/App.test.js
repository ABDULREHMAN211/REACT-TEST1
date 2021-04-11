import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/HELLO WORLD./i);
  expect(linkElement).toBeInTheDocument();
});

test('text test', () => {
  render(<App />);
  const linkElement = screen.getByText(/HELLO PIAIC./i);
  expect(linkElement).toBeInTheDocument();
});

test('text test', () => {
  render(<App />);
  const linkElement = screen.getByText(/HELLO SIR/i);
  expect(linkElement).toBeInTheDocument();
});
