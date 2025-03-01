it("show car details", () => {
    cy.visit("http://localhost:3000/");
    cy.get('.pick-container__title') // replace with the actual selector for your modal
        .should('be.visible') // Check if the modal is visible
        .contains('Vehicle Models');

    cy.get('.pick-description__table__col').should('be.visible').contains('Audi');
    cy.get('.pick-description__table__col').should('be.visible').contains('AC');
    
    /* cy.get('BMW 320 ModernLine'); */
    cy.get('#btn4').click();
    cy.get('.pick-description__table__col').should('be.visible').contains('320');
    cy.get('.pick-description__table__col').should('be.visible').contains('BMW');
    cy.get('.pick-description__table__col').should('be.visible').contains('AC');
    cy.get('.pick-description__table__col').should('be.visible').contains('Diesel');

    cy.get('.show-scroll').click({force: true});
    cy.get('.show-scroll').should('not.exist');
});
