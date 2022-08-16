/// <reference types="cypress"/>

require('cypress-plugin-tab')


describe("Ejemplo funcion Tab ", () =>{

    it("Type con Tab ",()=>{
        cy.visit("https://")
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1000)

        cy.get("#firstName").type("Nicolás").tab().
        type("Villalobos").tab().
        type("n.villalobos@gmail.com")
        
        
    })
})