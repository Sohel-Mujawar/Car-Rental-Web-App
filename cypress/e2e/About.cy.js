// Test suite for the About page
describe('About', () => {
    beforeEach(() => {
        // Visit the About page before each test
        cy.visit("http://localhost:3000/about");
    });
  
    // Test case to verify the display of About information
    it('displays About information', () => {
        cy.get('h3').contains('About').should('exist');
        cy.get('h2').contains('You start the engine and your adventure begins').should('exist');
        cy.get('p').contains('Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.').should('exist');
    });

    // Test case to verify the Plan section
    it('plan section', () => {
        cy.get('h3').contains('Plan your trip now').should('exist');
        cy.get('h2').contains('Quick & easy car rental').should('exist');
        cy.get('h3').contains('Contact Operator').should('exist');
    });

    // Test case to verify the Banner section
    it('Banner', () => {
        cy.get('h2').contains('Book a car by getting in touch with us').should('exist');
        cy.get('h3').contains('(123) 456-7869').should('exist');
    });
});
