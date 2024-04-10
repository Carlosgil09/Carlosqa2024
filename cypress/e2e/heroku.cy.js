describe('template spec', () => {
  it('test de login valido', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password')

  })
  
  it('test de login Con el usuario invalido, () => { 
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type('pepitolospalotes')   
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click
    cy.get('#flash').contains(' Your username is invalid!')
  }) 
})

