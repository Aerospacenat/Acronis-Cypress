// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />


  
function login() {
  //Finds the Username Text Field  and Enters the Username
  cy.get('.el-form-item__content > .el-input > .el-input__container > .el-input__wrapper > .el-input__editor').type('bawdseynat@gmail.com');
  //Finds the Password Text Field and Enters the Password
  cy.get('.el-password__container > .el-input > .el-input__container > .el-input__wrapper > .el-input__editor').type('Bawdsey123!');
  // Gets the Log-In button and clicks it
  cy.get('.el-button__content').click();
  // Assert that login is successful
  cy.contains('Specify license keys').should('be.visible');
}

function goToLogin() {
  cy.viewport(1920, 1080);
  cy.visit('https://account.acronis.com/#/auth/login');
}

//
// Performs an XMLHttpRequest instead of a cy.request (able to send data as FormData - multipart/form-data)
function form_request(method, url, formData, done){
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = function () {
    done(xhr);
  };
  xhr.onerror = function () {
    done(xhr);
  };
  xhr.send(formData);
}

Cypress.Commands.add('login', login);
Cypress.Commands.add('goToLogin', goToLogin);
Cypress.Commands.add('form_request', form_request);
