// Test case to show car rental team
it("show car rental team", () => {

    // Visit the homepage
    cy.visit("http://localhost:3000/");

    // Click on the team link
    cy.get('.team-link').click({force:true});

    // Expect the current URL to be "http://localhost:3000/#booking-section"
    cy.expect('http://localhost:3000/team');

    // Verify that the "Our Team" text is visible
    cy.get('.hero-pages__text') 
        .should('be.visible') 
        .contains('Our Team');

    // Verify that the description for Luke Miller is visible
    cy.get('.team-container__box__descr') 
        .should('be.visible') 
        .contains('Luke Miller');
    
    // Verify that the description for Caitlyn Hunt is visible
    cy.get('.team-container__box__descr') 
        .should('be.visible') 
        .contains('Caitlyn Hunt');

    // Verify that the description for Caitlyn Hunt contains the role "Menager"
    cy.contains('.team-container__box__descr', 'Caitlyn Hunt')
        .should('exist')
        .within(() => {
          cy.get('p').should('contain', 'Menager');
        });
    
    
});
