describe('Agregar tareas', () => {
    it('Agregar una tarea a la lista', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type('Tarea 1{enter}')
      cy.get('[data-testid="todo-item-label"]').contains('Tarea 1')
    })
  
    it('Marcar tarea como completada', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type('Tarea 2{enter}')
      cy.get('[data-testid="todo-item-toggle"]').click()
      cy.get('.todo-count').contains("0 items left!")

    })
  
    it('Desmarcar tarea como completada', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type('Tarea 3{enter}')
      cy.get('[data-testid="todo-item-toggle"]').click
      cy.get('[data-testid="todo-item-toggle"]').click


    })
      it('Editar tarea', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type('Tarea 4{enter}')
      cy.get('[data-testid="todo-item-label"]').dblclick()
      cy.focused().clear().type('La cocacola{enter}')
    })



      it.only('Borrar tarea', () => {
        cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type('Tarea 5{enter}')
      cy.get('[data-testid="todo-item-toggle"]').first().check()
      cy.get('.clear-completed').click()
    })

    it.only('Filtrar tareas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type('Tarea 1{enter}')
    cy.get('[data-testid="text-input"]').type('Tarea 2{enter}')
    cy.get('[data-testid="text-input"]').type('Tarea 3{enter}')
    cy.get('[data-testid="text-input"]').type('Tarea 4{enter}')
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').first().check()
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').first().check()
    cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').should('be.visible')
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').should('be.visible')
    cy.get(':nth-child(2) > a').click()
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').should('be.visible')
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').should('be.visible')

    cy.get(':nth-child(1) > a').click()










    

    })


    })