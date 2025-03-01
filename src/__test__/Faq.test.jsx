import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Faq from '../components/Faq';
import '@testing-library/jest-dom';


test('renders Faq component', () => {
  render(<Faq />);
  const faqSection = screen.getByText('FAQ');
  expect(faqSection).toBeInTheDocument();
});

test('initially sets activeQ state to "q1"', () => {
  render(<Faq />);
  const activeQState = screen.getByText(/1\. What is special about comparing rental car deals\?/i);
  const questionElement = activeQState.closest('.faq-box__question');
  expect(questionElement).toHaveClass('active-question');
});


test('opens and closes questions correctly', () => {
  render(<Faq />);
  const question1 = screen.getByText(/What is special about comparing rental car deals\?/i);
  const question2 = screen.getByText(/How do I find the car rental deals\?/i);

  fireEvent.click(question1);
  let activeQState = screen.getByText(/What is special about comparing rental car deals\?/i);
  expect(activeQState).not.toHaveClass('active-question');

  fireEvent.click(question2);
  activeQState = screen.getByText(/How do I find the car rental deals\?/i);
  const questionElement = activeQState.closest('.faq-box__question');
  expect(questionElement).toHaveClass('active-question');
});

test('renders correct classes for active question and answer', () => {
  render(<Faq />);
  const question1 = screen.getByText(/2. How do I find the car rental deals?\?/i);

  fireEvent.click(question1);

  const activeQState = screen.getByText(/How do I find the car rental deals?\?/i);
  const questionElement = activeQState.closest('.faq-box__question');

  expect(questionElement).toHaveClass('active-question');
  const activeAnswer = screen.getByText(/You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia/i);

  expect(activeAnswer).toHaveClass('active-answer');
});

test('renders FAQ content correctly', () => {
  render(<Faq />);
  const faqContent = screen.getByText('Frequently Asked Questions');

  expect(faqContent).toBeInTheDocument();
  
});
