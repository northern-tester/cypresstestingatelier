describe('My First Test', function() {
    it('finds the content Testing Atelier Site', function() {
      cy.visit('http://testingatelier.community')
      cy.contains('Sponsor Us').click()
      
      cy.url().should('include', '/sponsors')
    })
  })