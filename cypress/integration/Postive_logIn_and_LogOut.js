/// <reference types="Cypress" />

import AcronisPage from '../support/PageObjects/acronis';

describe('First Test', () => {
    beforeEach(() => {
      // launch the application and Customizes the View
      cy.goToLogin();
  
      // Logs in
      cy.login();
    });
    

    it('Test 1 ', () => {
      cy.get('[title="Profile"]').click();

      cy.contains('Profile').should('be.visible');

      cy.get('[title="Support"]').click();

      cy.contains('Support').should('be.visible');
  
    });

    it('Test 2 Log out ', () => {
      cy.get('.el-button__icon > .i').click();

      cy.contains('bawdseynat@gmail.com').should('be.visible');

      cy.get('[title="Log out"]').should('be.visible')

      cy.get('[title="Log out"]').click();

      cy.get('.modal-layout__header').should('be.visible')
  
    });
});
