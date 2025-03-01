describe('template spec', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('home rendering', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Book Ride').click() 
    //book ride
    //Select car
    cy.get('select#Select-Your-Car-Type').select('Toyota Camry');
    //Select pickup
    cy.get('select#Pick-up').select('Nis');
    //select dropof
    cy.get('select#Drop-of').select('Belgrade');
    //select date
    cy.get('input#picktime').type('2021-05-05');
    //drop time
    cy.get('input#droptime').type('2021-10-05');
    //search book
    cy.contains('Search').click();
  });



})

