import React from 'react';
import { render, screen } from '@testing-library/react'; // Update import statement
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import About from '../Pages/About';

test('renders about page', () => {
  render(
    <Router>
      <About />
    </Router>
  );

  // Check if the heading and text content are rendered
  const headingElement = screen.getByText(/About Company/i);
  expect(headingElement).toBeInTheDocument();

  const textElement = screen.getByText(/You start the engine and your adventure begins/i);
  expect(textElement).toBeInTheDocument();

  // Check if the images are rendered
  const carImage = screen.getByAltText('car-renting');
  expect(carImage).toBeInTheDocument();

  const carIcons = screen.queryAllByAltText(/car-icon/i); // Use directly from screen

  // Make assertions about the order
  expect(carIcons).toHaveLength(3);

  
  expect(carIcons[0]).toHaveAttribute('alt', 'car-icon');
  expect(carIcons[1]).toHaveAttribute('alt', 'car-icon');
  expect(carIcons[2]).toHaveAttribute('alt', 'car-icon');

  // Check if the numbers and descriptions are rendered
  const carTypes = screen.getByText(/Car Types/i);
  expect(carTypes).toBeInTheDocument();

  const rentalOutlets = screen.getByText(/Rental Outlets/i);
  expect(rentalOutlets).toBeInTheDocument();

  const repairShop = screen.getByText(/Repair Shop/i);
  expect(repairShop).toBeInTheDocument();

  // Check if the contact information is rendered
  const description = screen.getByText(/Certain but she but shyness why cottage./i);
  expect(description).toBeInTheDocument();
});
