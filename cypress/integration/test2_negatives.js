/// <reference types="Cypress" />

import AcronisPage from '../support/PageObjects/acronis';

describe('First Test', () => {
    beforeEach(() => {
      // launch the application and Customizes the View
      cy.goToLogin();
    });
    
    it('Test Email Error ', () => {
      AcronisPage.LoginPage.emailFieldFalse();

      AcronisPage.LoginPage.passwordFieldPostitive();

      AcronisPage.LoginPage.emailError();
      
    });

    it('Test Password Error ', () => {
        AcronisPage.LoginPage.emailFieldPostitive();
  
        AcronisPage.LoginPage.passwordFieldFalse();
        
        AcronisPage.LoginPage.loginButton();

        AcronisPage.LoginPage.passwordOrEmailError();
        
      });

      it('Test Null inputs ', () => {
        
        AcronisPage.LoginPage.loginButton();

        AcronisPage.LoginPage.emailError();

        AcronisPage.LoginPage.passwordError();

      });
});
