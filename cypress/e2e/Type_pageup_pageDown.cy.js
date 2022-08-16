/// <reference types="cypress"/>


describe("Ejemplo de Type pageUp, pageDown ", () =>{

    it("Type pageUp ",()=>{
        cy.visit("https://www.google.com")
        cy.title().should('eq','Google')
        cy.wait(1000)

        cy.get("#userName").type('{pageup}')//cuando encuentre ese campo que suba
        cy.wait(2000)
    })
        it.only("Type pageDown ",()=>{
            cy.visit("https://www.google.com")
            cy.title().should('eq','Google')
            cy.wait(1000)
    
            cy.get("#userName").type('{pagedown')//cuando encuentre ese campo que baje
            cy.wait(2000)
        
    })
})
