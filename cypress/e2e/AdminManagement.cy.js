import AdminManagement from "../support/Pages/AdminManagement"

describe('Admin Management', () => {
    beforeEach(() => {
        cy.login('Admin', 'admin123', 'Dashboard')
    })
    it('Search For No data Found', () => {
        const adminManagement = new AdminManagement;
        adminManagement.goAdminManagementPage()
        adminManagement.checkAdminPage('User Management')
        adminManagement.inputUsername('6043i')
        adminManagement.clickRole('Admin')
        adminManagement.clickStatus("Enabled")
        adminManagement.serachBtn()
        adminManagement.noDataFound('No Records Found')
    })
    it('Search By Admin', () => {
        const adminManagement = new AdminManagement;
        adminManagement.goAdminManagementPage()
        adminManagement.checkAdminPage('User Management')
        adminManagement.clickRole('Admin')
        adminManagement.serachBtn()
        adminManagement.userRoleCheck('Admin')
    })
    it('Search By ESS', () => {
        const adminManagement = new AdminManagement;
        adminManagement.goAdminManagementPage()
        adminManagement.checkAdminPage('User Management')
        adminManagement.clickRole('ESS')
        adminManagement.serachBtn()
        adminManagement.userRoleCheck('ESS')
        adminManagement.resetSearch()
    })
    it('Search By Status', () => {
        const adminManagement = new AdminManagement;
        adminManagement.goAdminManagementPage()
        adminManagement.checkAdminPage('User Management')
        adminManagement.clickStatus('Enabled')
        adminManagement.serachBtn()
        adminManagement.userStatusCheck('Enabled')
        adminManagement.resetSearch()
    })
    it.only('Search By Status', () => {
        const adminManagement = new AdminManagement;
        adminManagement.goAdminManagementPage()
        adminManagement.checkAdminPage('User Management')
        adminManagement.clickStatus('Disabled')
        adminManagement.serachBtn()
        adminManagement.userStatusCheck('Disabled')
        adminManagement.resetSearch()
    })

})