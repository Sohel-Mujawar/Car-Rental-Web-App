describe('Faq component tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('renders Faq component', () => {
        cy.get('.faq-content').should('exist');
        cy.get('h5').contains('FAQ');
        cy.get('h2').contains('Frequently Asked Questions');
    });

    it('initially sets activeQ state to "q1"', () => {
        cy.get('p').contains('1. What is special about comparing rental car deals?');
        cy.get('#q1').should('have.class', 'active-question');
        // Simulate a click to toggle the question state
        cy.get('#q1').click();

        // Now, the class 'active-question' should be removed
        cy.get('#q1').should('not.have.class', 'active-question');
    });

    it('initially sets activeQ state to "q2"', () => {
        // the class 'active-question' should be removed
        cy.get('#q2').should('not.have.class', 'active-question');
        cy.get('p').contains('2. How do I find the car rental deals?');
        // Simulate a click to toggle the question state
        cy.get('#q2').click();
        cy.get('#q2').should('have.class', 'active-question');
        cy.get('#q2').click();
        cy.get('#q2').should('not.have.class', 'active-question');
    });

    it('initially sets activeQ state to "q3"', () => {
        // the class 'active-question' should be removed
        cy.get('#q3').should('not.have.class', 'active-question');
        cy.get('p').contains('2. How do I find the car rental deals?');
        // Simulate a click to toggle the question state
        cy.get('#q3').click();
        cy.get('#q3').should('have.class', 'active-question');
        cy.get('#q3').click();
        cy.get('#q3').should('not.have.class', 'active-question');
    });

    it('test open close multiple times', () => {
        cy.get('#q1').click();
        // the class 'active-question' should be removed
        cy.get('#q1').should('not.have.class', 'active-question');
        cy.get('#q2').should('not.have.class', 'active-question');
        cy.get('#q3').should('not.have.class', 'active-question');

        // Simulate a click to toggle the question state
        cy.get('#q1').click();
        cy.get('#q1').should('have.class', 'active-question');
        cy.get('#q2').should('not.have.class', 'active-question');
        cy.get('#q3').should('not.have.class', 'active-question');

        cy.get('#q2').click();
        cy.get('#q1').should('not.have.class', 'active-question');
        cy.get('#q2').should('have.class', 'active-question');
        cy.get('#q3').should('not.have.class', 'active-question');

        cy.get('#q3').click();
        cy.get('#q1').should('not.have.class', 'active-question');
        cy.get('#q2').should('not.have.class', 'active-question');
        cy.get('#q3').should('have.class', 'active-question');
    });
});
