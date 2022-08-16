/// <reference types="cypress"/>

describe ('Primer Test con Cypress', () =>{
    it("Esto es un hola mundo desde Cypress", () =>{
        cy.log("Bienvenido a Cypress")
        cy.visit('https://testingqarvn.com.es/datos-personales')
        cy.wait(1000)

        cy.get("#wsf-1-field-21").type("Nicolás")
        cy.wait(1000)
        cy.get("#wsf-1-field-22").type("Villalobos")
        cy.wait(1000)
        cy.get("#wsf-1-field-23").type("n.villalobosbrito@gmail.com")
        cy.wait(1000)
        cy.get("#wsf-1-field-24").type("9933992752")
        cy.wait(1000)
        cy.get("#wsf-1-field-28").type("angamos 1578")
        cy.wait(1000)
        cy.get("#wsf-1-field-27").click()
        cy.wait(4000)
     
    })
})
