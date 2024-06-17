export default class Mypage {
    selector = {
        firstname : '[name="first_name"]',
        lastname : '[name="last_name"]',
        email : '[name="email"]',
        message : '[name="message"]',
        submitBtn : '[type="submit"]',
        resetBtn : '[type="reset"]',
        thankyoumsg : 'h1'

    }

    visitUrl(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    }

    buttonClk(css){
        cy.get(css).click()
    }

    userDataFill(user){
        cy.get(this.selector.firstname).type(user.fn)
        cy.get(this.selector.lastname).type(user.ln)
        cy.get(this.selector.email).type(user.em)
        cy.get(this.selector.message).type(user.msg)
    }

    validateText(css,text){
        cy.get(css).should('have.text',text)
    }
}