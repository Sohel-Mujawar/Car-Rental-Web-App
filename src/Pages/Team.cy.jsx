import React from 'react'
import Team from './Team'
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Team />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Router><Team /></Router>)
    expect(cy.get('h3').contains('Our Team'));
    expect(cy.get('p').contains('Salesman'));
    //Footer
    expect(cy.get('p').contains('Subscribe your Email address for latest news & updates.'));
  })
})