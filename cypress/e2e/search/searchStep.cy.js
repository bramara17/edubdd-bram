/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import SearchPage from'./searchPage.cy'

Given('I open Zero Bank Website Homepage', () =>{
    SearchPage.visit()
})

When('I type halo in search input', () =>{
    SearchPage.fillSearch()
})

Then('I should see the result page that shows search result', () =>{
    SearchPage.searchPage()
})