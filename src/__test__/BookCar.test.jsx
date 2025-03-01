import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this for additional matchers
import BookCar from '../components/BookCar';
import { BrowserRouter as Router } from 'react-router-dom';


describe('<BookCar />', () => {
  // Mock the window.alert method

  it('opens the modal on button click', () => {
    const { getByText, getByLabelText, getByPlaceholderText } = render(<Router><BookCar /></Router>);

    // Click on the "Search" button
    fireEvent.click(getByText('Search'));

    // Check if the modal is opened
    expect(getByText('Complete Reservation')).toBeInTheDocument();
  });

  it('shows an error message if required fields are not filled when searching', () => {
    const { getByText, getByLabelText } = render(<BookCar />);

    // Click on the "Search" button without filling required fields
    fireEvent.click(getByText('Search'));

    // Check if the error message is displayed
    expect(getByText('All fields required!')).toBeInTheDocument();
  });
  it('render the book content', () => {
    const { getByText, getByLabelText } = render(<BookCar />);

    // Click on the "Search" button without filling required fields
    fireEvent.click(getByText('Search'));

    // Check if the error message is displayed
    expect(getByText('Select Your Car Type')).toBeInTheDocument();

  });
   

  it('confirms booking and shows a success message', async () => {
    const { getByText, getByLabelText, getByPlaceholderText } = render(<BookCar />);
  
    // Check if important elements are present
    expect(getByText('Book a car')).toBeInTheDocument();
  
    // Wait for the car type label to be present
    
      expect(getByLabelText('Select Your Car Type *')).toBeInTheDocument();
    
  
    // Fill in required fields
    fireEvent.change(getByLabelText('Select Your Car Type *'), { target: { value: 'Audi A1 S-Line' } });
    fireEvent.change(getByLabelText('Pick-up *'), { target: { value: 'Belgrade' } });
    fireEvent.change(getByLabelText('Drop-of *'), { target: { value: 'Novi Sad' } });
    fireEvent.change(getByLabelText('picktime *'), { target: { value: '01/10/2024' } });
  
    // Other form fields...
  
    // Click on the "Reserve Now" button
    fireEvent.click(getByText('Reserve Now'));
  
    // Expect the success message or any other relevant elements
    
      expect(getByText('Check your email to confirm an order.')).toBeInTheDocument();
    
  });
  
    
  
});

