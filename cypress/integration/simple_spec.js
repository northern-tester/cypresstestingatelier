describe('My First Test', function(){
    it('Does not do much!', function(){
        expect(true).to.equal(true)
    })
})

describe('My Second Test', function(){
    it('Does not do much!', function(){
        expect(false).to.equal(false)
    })
})

describe('My Third Test', function(){
    it('Finds the content "type" in the example app', function(){
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        //Should be on a new url which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')
    })
})

describe('My Fourth Test', function(){
    it('Types an email and asserts against it', function(){
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        //Should be on a new url which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')
        cy.get('.action-email')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com')
    })
})