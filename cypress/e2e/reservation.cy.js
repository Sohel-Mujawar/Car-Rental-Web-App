it('book ride', () => {
  cy.visit('http://localhost:3000/')

  // Click on "Book Ride" button
  cy.contains('Book Ride').click() 

  // Select car
  cy.get('select#Select-Your-Car-Type').select('Toyota Camry');

  // Select pickup location
  cy.get('select#Pick-up').select('Nis');

  // Select drop-off location
  cy.get('select#Drop-of').select('Belgrade');

  // Select date
  cy.get('input#picktime').type('2021-05-05');

  // Select drop time
  cy.get('input#droptime').type('2021-10-05');

  // Click on "Search" button
  cy.contains('Search').click();

  // Check if the booking modal is visible and contains the selected car
  cy.get('.booking-modal').should('be.visible').contains('Toyota Camry');

  // Check if the pickup location is displayed correctly
  cy.get('h6').contains('Pick-Up Location').should('be.visible');
  cy.get('p').contains('Nis').should('be.visible');

  // Check if the drop-off location is displayed correctly
  cy.get('h6').contains('Drop-Off Location').should('be.visible');
  cy.get('p').contains('Belgrade').should('be.visible');

  // Complete reservation information
  cy.get('input[placeholder="Enter your first name"]').type("Aute et consequatur");
  cy.get('input[placeholder="Enter your first name"]').should('have.value', "Aute et consequatur");

  cy.get('input[placeholder="Enter your last name"]').type("Aute et consequatur");
  cy.get('input[placeholder="Enter your last name"]').should('have.value', "Aute et consequatur");

  cy.get('input[placeholder="Enter your phone number"]').type("Aute et consequatur");
  cy.get('input[placeholder="Enter your first name"]').should('have.value', "Aute et consequatur");
  
  cy.get('input[placeholder="18"]').type("Aute et consequatur");
  cy.get('input[placeholder="18"]').should('have.value', "");
  cy.get('input[placeholder="18"]').type("20");

  cy.get('input[placeholder="Enter your email address"]').type("Aute et consequatur");

  cy.get('input[placeholder="Enter your street address"]').type("Aute et consequatur");
  cy.get('input[placeholder="Enter your street address"]').should('have.value', "Aute et consequatur");

  cy.get('input[placeholder="Enter your city"]').type("Aute et consequatur");
  cy.get('input[placeholder="Enter your city"]').should('have.value', "Aute et consequatur");

  cy.get('input[placeholder="Enter your zip code"]').type("1234");
  cy.get('input[placeholder="Enter your zip code"]').should('have.value', "1234");

  // Click on "Reserve" button
  cy.contains('Reserve').click();

  // Check if the confirmation message is displayed
  cy.contains("Check your email to confirm an order.");
})
