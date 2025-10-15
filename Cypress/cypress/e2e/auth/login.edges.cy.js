import { loginPage } from '../../pages/auth/LoginPage';

describe('Auth - Login (Edge Cases)', () => {
  let cases;

  before(() => {
    cy.fixture('login-cases').then((data) => {
      cases = data;
    });
  });

  beforeEach(() => {
    cy.clearCookies();
    cy.intercept('POST', '/api/login').as('login');
  });

  it('Sanity check - fixture cargada', () => {
    expect(cases.length).to.be.greaterThan(0);
  });

  it('Edge cases de login', () => {
    cases.forEach((testCase) => {
      cy.log(`Running case: ${testCase.name}`);

      loginPage.login(testCase.user_name, testCase.password);

      // Validar mensaje de error
      cy.contains(testCase.expectedUiMsg).should('be.visible');

    });
  });
});
