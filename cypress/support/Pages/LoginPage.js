class LoginPage{
    locator={
        userName:"input[placeholder='Username']",
        passWord:"input[placeholder='Password']",
        loginBtn:"button[type='submit']",
        assert:".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module",
        invalidAssert:".oxd-text.oxd-text--p.oxd-alert-content-text"
    }
    baseUrl(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.wait(60000)
    }
    inputUserName(userName){
        cy.get(this.locator.userName).type(userName)
    }
    inputPassword(passWord){
        cy.get(this.locator.passWord).type(passWord)
    }
    clickBtn(){
        cy.get(this.locator.loginBtn).click()
    }
    checkLogin(text){
        cy.get(this.locator.assert).should('have.text',text)
    }
    invalidLogin(text){
        cy.get(this.locator.invalidAssert).should('have.text',text)
    }

}
export default LoginPage;