class AdminManagement {
    locator = {
        adminMenu: "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)",
        adminPageText: ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-level",
        username: "div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']",
        userRole: "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > i:nth-child(1)",
        employeeName: "input[placeholder='Type for hints...']",
        status: "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > i:nth-child(1)",
        btn: "button[type='submit']",
        reset:"button[class='oxd-button oxd-button--medium oxd-button--ghost']"
    }
    goAdminManagementPage(){
        cy.get(this.locator.adminMenu).click();
    }
    checkAdminPage(text){
        cy.get(this.locator.adminPageText).should('have.contain',text)
    }
    inputUsername(name){
        cy.get(this.locator.username).type(name)
    }
    clickRole(role){
        cy.get(this.locator.userRole).click()
        cy.get()
    }
}
export default AdminManagement;