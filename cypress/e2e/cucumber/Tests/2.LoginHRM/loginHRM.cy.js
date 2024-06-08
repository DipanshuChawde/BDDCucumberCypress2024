///<reference types="cypress" />
import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps"

Given('Navigate to OHRM url page',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

When('I enter user-name and pass-word',(datatable)=>{
    datatable.hashes().forEach(element => {
        cy.get('[name="username"]').type(element.username)
        cy.get('[name="password"]').type(element.password)
    });

})
And('click on login button',()=>{
cy.get('.orangehrm-login-button').click()
})

Then('validate for valid user page',()=>{
cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
})

//scenario TC002
When('I enter {word} and {word}',(un,pw)=>{
    cy.get('[name="username"]').type(un)
    cy.get('[name="password"]').type(pw)
})


//scenario TC003

When('I enter {word} and {word}',(un,pw)=>{
    cy.get('[name="username"]').type(un)
    cy.get('[name="password"]').type(pw)
})

Then('validate for valid and invalid {word}',(cri)=>{
    if(cri=='valid'){
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
    }
    else if(cri=='invalid'){
        cy.get('.oxd-alert-content-text').should('have.text', 'Invalid credentials')
    }
})

//Scenario TC004

When('I enter for {string} and {string}',(un,pw)=>{
    cy.get('[name="username"]').type(un)
    cy.get('[name="password"]').type(pw)
})

Then('validate for value valid and invalid {string}',(cri)=>{
    if(cri=='valid'){
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
    }
    else if(cri=='invalid'){
        cy.get('.oxd-alert-content-text').should('have.text', 'Invalid credentials')
    }
})