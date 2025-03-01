import React from 'react'
import Models from './Models'
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Models />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Router><Models /></Router>)
  })
})