describe('My Frist Test', function() {
  it('Application renders successfully', function() {
    cy.visit('http://localhost:3000');

    cy.get('section').should('have.id', 'projects');
  });
});
