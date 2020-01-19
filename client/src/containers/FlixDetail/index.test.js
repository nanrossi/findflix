import React from 'react';
import { render } from '@testing-library/react';
import FlixDetail from './FlixDetail';

test('renders learn react link', () => {
  const { getByText } = render(<FlixDetail />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
