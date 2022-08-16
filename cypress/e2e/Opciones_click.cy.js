/// <reference types="cypress"/>


describe("Opciones de Click ", () =>{

    it("Click sencillo ",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        cy.get('#txtUsername').should("be.visible").type("Admin")
        cy.wait(1000)
        cy.get('#txtPassword').should("be.visible").type("admin123")
        cy.wait(1000)
        //click 
        cy.get('#btnLogin').should("be.visible").click()

        
    })
})