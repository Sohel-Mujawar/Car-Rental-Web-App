import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PickCar from '../components/PickCar';
import '@testing-library/jest-dom';


test('renders PickCar component', () => {
  render(<PickCar />);
  const pickSection = screen.getByText('Vehicle Models');
  expect(pickSection).toBeInTheDocument();
});

test('selects and displays correct car information', () => {
  render(<PickCar />);

  // Click on the button corresponding to "Audi A1 S-Line"
  fireEvent.click(screen.getByText('Audi A1 S-Line'));

  // Check if the correct car information is displayed
  const audiCarInfo = screen.getByText('Audi A1 S-Line');
  expect(audiCarInfo).toBeInTheDocument();
});

test('applies color to the selected button', () => {
  render(<PickCar />);

  // Click on the button corresponding to "Audi A1 S-Line"
  /* fireEvent.click(screen.getByText('Audi A1 S-Line')); */
  
  const audiCarInfo = screen.getByText('Audi A1 S-Line');
  expect(audiCarInfo).toBeInTheDocument();
  // Check if the button has the "colored-button" class
  const coloredButton = screen.getByText('Audi A1 S-Line');
  expect(coloredButton).toHaveClass('colored-button');
});

test('applies color to the correct button when clicking', () => {
  render(<PickCar />);

  // Click on the button corresponding to "Audi A1 S-Line"
  /* fireEvent.click(screen.getByText('Audi A1 S-Line')); */

  // Check if the correct button has the "colored-button" class
  const audiButton = screen.getByText('Audi A1 S-Line').closest('button');
  expect(audiButton).toHaveClass('colored-button');

  // Click on the button corresponding to "VW Golf 6"
  fireEvent.click(screen.getByText('VW Golf 6'));

  // Check if the previous button (Audi) does not have the "colored-button" class
  expect(audiButton).not.toHaveClass('colored-button');

  // Check if the new button (VW Golf 6) has the "colored-button" class
  const vwButton = screen.getByText('VW Golf 6').closest('button');
  expect(vwButton).toHaveClass('colored-button');
});

test('displays correct data when clicking on VW Golf 6', () => {
  render(<PickCar />);

  // Click on the "VW Golf 6" button
  const vwGolf6Button = screen.getByText(/VW Golf 6/i);
  fireEvent.click(vwGolf6Button);

  // Check if the data for VW Golf 6 is displayed
  
  const vwGolf6Name = screen.getByText("VW Golf 6");
  const vwGolf6Price = screen.getByText("$37");
  const vwGolf6Model = screen.getByText("Golf 6");
   

  // Assert that the elements with the data are in the document
  expect(vwGolf6Name).toBeInTheDocument();
  expect(vwGolf6Price).toBeInTheDocument();
  expect(vwGolf6Model).toBeInTheDocument();
   
});