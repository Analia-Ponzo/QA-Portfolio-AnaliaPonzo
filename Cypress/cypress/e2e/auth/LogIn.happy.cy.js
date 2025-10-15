import { loginPage } from '../../pages/auth/LoginPage';

describe('Auth - Login (Happy Path)', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit('/');
  });

  it('LogIn Happy Path', () => {
    
    const user_name = 'standard_user';
    const password = 'secret_sauce';

   
    loginPage.user().type(user_name);
    loginPage.password().type(password);
    loginPage.submit().click();
    cy.contains('Products').should('be.visible');
  
  });
});
