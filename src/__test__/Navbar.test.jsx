import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('toggles the mobile navigation when the mobile-hamb button is clicked', () => {

  // Render the Navbar component
  render(<Router><Navbar /></Router>);


  expect.toHaveClass('open-nav');


  });
