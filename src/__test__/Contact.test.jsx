import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from '../Pages/Contact';
import '@testing-library/jest-dom'

test('renders contact page', () => {
  render(
    <Router>
      <Contact />
    </Router> 
  
  );

  // Check if the heading and text content are rendered
  const headingElement = screen.getByText(/Need additional information?/i);
  expect(headingElement).toBeInTheDocument();

  const textElement = screen.getByText(
    /A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience./i
  );
  expect(textElement).toBeInTheDocument();

  // Check if the contact information is rendered
  const phoneLink = screen.getByRole('link', { name: /\(123\) 456-7869/i });
  expect(phoneLink).toBeInTheDocument();
  expect(phoneLink).toHaveAttribute('href', '/');

  const emailLink = screen.getByRole('link', { name: /carrental@carmail.com/i });
  expect(emailLink).toBeInTheDocument();
  expect(emailLink).toHaveAttribute('href', '/');

  const locationText = screen.getByText(/Belgrade, Serbia/i);
  expect(locationText).toBeInTheDocument();

  // Check if the form inputs are rendered
  const fullNameInput = screen.getByLabelText(/Full Name/i);
  expect(fullNameInput).toBeInTheDocument();
  expect(fullNameInput).toHaveAttribute('type', 'text');

  const emailInput = screen.getByLabelText(/Email \* /i);
  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveAttribute('type', 'email');

  const messageTextarea = screen.getByLabelText(/Tell us about it \* /i);
  expect(messageTextarea).toBeInTheDocument();
  expect(messageTextarea).toHaveAttribute('placeholder', 'Write Here..');

  // Check if the submit button is rendered
  const submitButton = screen.getByRole('button', { name: /Send Message/i });
  expect(submitButton).toBeInTheDocument();

  // Simulate form submission
  fireEvent.click(submitButton);

  
});