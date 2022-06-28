/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open Zero Bank Website Homepage', () =>{
    cy.visit('http://zero.webappsecurity.com/index.html')
})

When('I type halo in search input', () =>{
    cy.get('#searchTerm').type('online {halo}')
})

Then('I should see the result page that shows search result', () =>{
    cy.get('h2').should('contain.text','Search Results:')
})