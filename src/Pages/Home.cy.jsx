import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

describe('<Home />', () => {
  it('renders', () => {
    // Mount the component using cypress-react-unit-test
    cy.mount(
      <Router>
        <Home />
      </Router>
    );
    //Hero component
    expect(cy.get('h4').contains('Plan your trip now'));
    //Bookcar component
    expect(cy.get('p').contains('Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.'));
    //Plan trip component
    expect(cy.get('p').contains('We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs'));
    //PickCar component
    expect(cy.get('p').contains('Choose from a variety of our amazing vehicles to rent for your next adventure or business trip'));
    //Banner component
    expect(cy.get('h2').contains('Save big with our cheap car rental!'));
    //Choose us component
    expect(cy.get('p').contains('Discover the best deals you\'ll ever find with our unbeatable offers. We\'re dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don\'t miss out on your chance to save big.'));
    //Testimonials component
    expect(cy.get('h2').contains('Client\'s Testimonials'));
    expect(cy.get('p').contains('Discover the positive impact we\'ve made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they\'re eager to share their positive experiences with you.'));
    //faq component
    expect(cy.get('h2').contains('Frequently Asked Questions'));
    expect(cy.get('p').contains('Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.'));
    //Download component
    expect(cy.get('h2').contains('Download our app to get most out of it'));
    //Footer component
    expect(cy.get('span').contains('CAR'));
  });
});
