import AdminManagement from "../support/Pages/AdminManagement"

describe('Admin Management', () => {
    it('Search', () => {
        const adminManagement = new AdminManagement;
        cy.login('Admin','admin123','Dashboard')
        adminManagement.goAdminManagementPage()
        adminManagement.checkAdminPage('User Management')
        adminManagement.inputUsername('6043i')
    })
})