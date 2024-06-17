///<reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import page from "../../Pages/contactUsPage"
import userData from "../../../../fixtures/payloadContactUs"

let pg = new page
let currentuser;

Given('i navigate to contact us page {word}', (index) => {
 currentuser=userData[index]
 pg.visitUrl()
})
When('i enter user details', () => {
pg.userDataFill(currentuser)
})
And('i click on submit button', () => {
pg.buttonClk(pg.selector.submitBtn)
})
Then('i verify user message', () => {
pg.validateText(pg.selector.thankyoumsg,'Thank You for your Message!')
})