class AdminManagement {
    locator = {
        adminMenu: "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)",
        adminPageText: ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-level",
        username: "div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']",
        userRole: "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > i:nth-child(1)",
        employeeName: "input[placeholder='Type for hints...']",
        status: "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > i:nth-child(1)",
        btn: "button[type='submit']",
        reset:"button[class='oxd-button oxd-button--medium oxd-button--ghost']",
        selectDropdown:'.oxd-select-dropdown',
        notFoundText:"div[class='orangehrm-horizontal-padding orangehrm-vertical-padding'] span[class='oxd-text oxd-text--span']",
        userRoleCheck:".oxd-table-card > .oxd-table-row > :nth-child(3) > div",
        userStatusCheck:"div[role='rowgroup'] div:nth-child(1) div:nth-child(1) div:nth-child(5) div:nth-child(1)"
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
        cy.get(this.locator.selectDropdown).contains(role).click(); 
    }
    clickStatus(status){
        cy.get(this.locator.status).click()
        cy.get(this.locator.selectDropdown).contains(status).click()
    }
    serachBtn(){
        cy.get(this.locator.btn).click()
    }
    noDataFound(text){
        cy.get(this.locator.notFoundText).should('have.contain',text)
    }
    userRoleCheck(text){
        cy.wait(3000)
        cy.get(this.locator.userRoleCheck).should('have.contain',text)
    }
    userStatusCheck(text){
        cy.wait(3000)
        cy.get(this.locator.userStatusCheck).should('have.contain',text)
    }
    resetSearch(){
        cy.get(this.locator.reset).click();
        cy.get(this.locator.username).should('have.contain','')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').should('have.contain','Select')
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').should('have.contain','Select')
    }
}
export default AdminManagement;