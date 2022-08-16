/// <reference types="cypress"/>


describe("Seccion 1 validando el titulo ", () =>{

    it("Test validar el titulo ",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')

        cy.log("Ok la funcion titlee funciona bien")
    })
    
})//Ciere de describle