import React from 'react';
import { render } from '@testing-library/react';
import EditFlix from './EditFlix';

test('renders learn react link', () => {
  const { getByText } = render(<EditFlix />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
