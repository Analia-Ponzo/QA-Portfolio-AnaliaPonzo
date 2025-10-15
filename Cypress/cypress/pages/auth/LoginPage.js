class LoginPage {
  visit() {
    cy.visit('/');
  }

  user() {
    return cy.get('[data-test="username"]');
  }

  password() {
    return cy.get('[data-test="password"]');
  }

  submit() {
    return cy.get('#login-button');
  }

  login(user_name, pass) {
    this.visit();
    if (user_name) this.user().type(user_name);
    if (pass) this.password().type(pass);
    this.submit().click();
  }
}

export const loginPage = new LoginPage();
