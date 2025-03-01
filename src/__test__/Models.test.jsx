import React from 'react';
import { render, screen, fireEvent ,within} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import Models from '../Pages/Models';

test('renders Models component', () => {
  render(<Router><Models /></Router>);
  const modelsSection = screen.getByText('Vehicle Models');
  expect(modelsSection).toBeInTheDocument();
});

test('displays correct car information', () => {
   render(<Router><Models /></Router>);


  // Check if the car names are displayed
  const audiCarName = screen.getByText('Audi A1');
  expect(audiCarName).toBeInTheDocument();

  const golfCarName = screen.getByText('Golf 6');
  expect(golfCarName).toBeInTheDocument();

  const toyotaCarName = screen.getByText('Toyota');
  expect(toyotaCarName).toBeInTheDocument();

  const bmwCarName = screen.getByText('BMW 320');
  expect(bmwCarName).toBeInTheDocument();

  const mercedesCarName = screen.getByText('Mercedes');
  expect(mercedesCarName).toBeInTheDocument();

  const vwPassatCarName = screen.getByText('VW Passat');
  expect(vwPassatCarName).toBeInTheDocument();

  // Check if the car prices are displayed
  const audiCarPrice = screen.getByText('$45');
  expect(audiCarPrice).toBeInTheDocument();

  const golfCarPrice = screen.getByText('$37');
  expect(golfCarPrice).toBeInTheDocument();

  const toyotaCarPrice = screen.getByText('$30');
  expect(toyotaCarPrice).toBeInTheDocument();

  const bmwCarPrice = screen.getByText('$35');
  expect(bmwCarPrice).toBeInTheDocument();

  const mercedesCarPrice = screen.getByText('$50');
  expect(mercedesCarPrice).toBeInTheDocument();

  const vwPassatCarPrice = screen.getByText('$25');
  expect(vwPassatCarPrice).toBeInTheDocument();
});

test('displays correct car details', () => {
   render(<Router><Models /></Router>);


  // Check if the car details are displayed
  const audiCarDetails = screen.getByText('Audi');
  expect(audiCarDetails).toBeInTheDocument();

  const golfCarDetails = screen.getByText('VW');
  expect(golfCarDetails).toBeInTheDocument();

  const toyotaCarDetails = screen.getByText('Camry');
  expect(toyotaCarDetails).toBeInTheDocument();

  const bmwCarDetails = screen.getByText('ModernLine');
  expect(bmwCarDetails).toBeInTheDocument();

  const mercedesCarDetails = screen.getByText('Benz GLK');
  expect(mercedesCarDetails).toBeInTheDocument();

  const vwPassatCarDetails = screen.getByText('CC');
  expect(vwPassatCarDetails).toBeInTheDocument();
});

test('test book ride', () => {
  render(<Router><Models /></Router>);

  const mercedesCarDetails = screen.getByText('Mercedes');
  const mercedesContainer = mercedesCarDetails.closest('.models-div__box');
  
  const bookRideButtons = within(mercedesContainer).getAllByText('Book Ride');
  
  expect(bookRideButtons).toHaveLength(1); // or any other number you expect
  fireEvent.click(bookRideButtons[0]);

  
});