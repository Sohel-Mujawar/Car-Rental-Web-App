import React from 'react'
import TestimonialsPage from './TestimonialsPage'
import { BrowserRouter as Router } from 'react-router-dom';

describe('<TestimonialsPage />', () => {
  it('renders', () => {
    
    cy.mount(<Router><TestimonialsPage /></Router>);

    //Testimonials component
    expect(cy.get('h2').contains('Client\'s Testimonials'));
    expect(cy.get('p').contains('Discover the positive impact we\'ve made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they\'re eager to share their positive experiences with you.'));
    
    expect(cy.get('h2').contains('Book a car by getting in touch with us'));

  })
})