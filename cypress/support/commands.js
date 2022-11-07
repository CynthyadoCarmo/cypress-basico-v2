Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Cynthya')
    cy.get('#lastName').type('Correa')
    cy.get('#email').type('cynthyacs1@hotmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()

        
})
