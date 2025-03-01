import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Banner from '../components/Banner';

test('renders banner text', () => {
  const { getByText } = render(<Banner />);
  const headingElement = getByText(/Save big with our cheap car rental!/i);
  expect(headingElement).toBeInTheDocument();
});
