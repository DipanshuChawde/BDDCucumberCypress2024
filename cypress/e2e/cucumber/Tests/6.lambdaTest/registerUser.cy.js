///<reference types="cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import page from "../../Pages/pageLmbdaTest"
import data from "../../../../fixtures/payloadLambdaTest"

let pg=new page

Given('I visit to lambda test login url{word}', (index) => {
pg.visitUrl()
})
And('i click on continue button', () => {
//pg.btnClick(pg.)
})
When('i fill the form and i click on continue button', () => {

})
Then('i check for new user created', () => {

})