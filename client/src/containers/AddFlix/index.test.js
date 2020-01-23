import React from 'react';
import { render } from '@testing-library/react';
import AddFlix from './AddFlix';

test('renders learn react link', () => {
  const { getByText } = render(<AddFlix />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
