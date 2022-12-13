import { render, screen } from '@testing-library/react';
import {ColoredText} from './colored-text';

test('renders learn react link', () => {
  render(<ColoredText />);
  const textElement = screen.getByText(/This text’s color changes dynamically!/i);
  expect(textElement).toBeInTheDocument();
});
