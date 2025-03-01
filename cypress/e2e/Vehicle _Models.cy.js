// Test case to show car details
it("show car details", () => {
    // Visit the homepage
    cy.visit("http://localhost:3000/");

    // Check if the modal is visible and contains the text "Vehicle Models"
    cy.get('.pick-container__title') 
        .should('be.visible')
        .contains('Vehicle Models');

    // Check if the table contains the text "Audi"
    cy.get('.pick-description__table__col')
        .should('be.visible')
        .contains('Audi');

    // Check if the table contains the text "AC"
    cy.get('.pick-description__table__col')
        .should('be.visible')
        .contains('AC');
    
    // Click on button with id "btn4"
    cy.get('#btn4').click();

    // Check if the table contains the text "320"
    cy.get('.pick-description__table__col')
        .should('be.visible')
        .contains('320');

    // Check if the table contains the text "BMW"
    cy.get('.pick-description__table__col')
        .should('be.visible')
        .contains('BMW');

    // Check if the table contains the text "AC"
    cy.get('.pick-description__table__col')
        .should('be.visible')
        .contains('AC');

    // Check if the table contains the text "Diesel"
    cy.get('.pick-description__table__col')
        .should('be.visible')
        .contains('Diesel');

    // Click on the CTA button
    cy.get('.cta-btn').click();

    // Expect the current URL to be "http://localhost:3000/#booking-section"
    cy.expect('http://localhost:3000/#booking-section');
});
