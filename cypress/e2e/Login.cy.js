import LoginPage from "../support/Pages/LoginPage"
import userData from "../fixtures/userData.json"
describe('Login spec', () => {
  it('Login', () => {
    const loginPage = new LoginPage();
    loginPage.baseUrl();
    loginPage.inputUserName('Admin');
    loginPage.inputPassword('admin123');
    loginPage.clickBtn()

  })
  it.only('Login Using Command', () => {
    const loginPage = new LoginPage();
    loginPage.baseUrl();
    for (let index = 0; index < userData.length; index++) {
      const element = userData[index];
      loginPage.inputUserName(element.userName);
      loginPage.inputPassword(element.passWord);
      loginPage.clickBtn();

      // Check if the credentials are correct and verify successful login
      if (element.userName === 'Admin' && element.passWord === 'admin123') {
        loginPage.checkLogin(element.text);  // Make sure the checkLogin method is implemented
      }
      else{
        loginPage.invalidLogin(element.text)
      }
      
    }
  })
})