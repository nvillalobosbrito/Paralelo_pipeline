/// <reference types="cypress"/>


describe("Introducción a los assert ", () =>{

    it("Demo de los Asserts ",()=>{
        cy.visit("https://demoqa.com/automation-practive-form")
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1000)

        cy.get("#firstName").should("be.visible").type("Juan")
        cy.wait(1000)
        cy.get("#lastName").should("be.visible").type("Perez")
        cy.wait(1000)
        cy.get("#userEmail").should("be.visible").should("be.enabled").type("juan@gmail.com")
      
    })
})