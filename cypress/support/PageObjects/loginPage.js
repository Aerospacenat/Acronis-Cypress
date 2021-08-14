class loginPage {
  emailFieldFalse() {
    cy.get('.el-form-item__content > .el-input > .el-input__container > .el-input__wrapper > .el-input__editor').type('negative');
  };

  emailFieldPostitive(){
    cy.get('.el-form-item__content > .el-input > .el-input__container > .el-input__wrapper > .el-input__editor').type('bawdseynat@gmail.com');
  }

  passwordFieldFalse() {
    cy.get('.el-password__container > .el-input > .el-input__container > .el-input__wrapper > .el-input__editor').type('123456!');
  };

  passwordFieldPostitive(){
    cy.get('.el-password__container > .el-input > .el-input__container > .el-input__wrapper > .el-input__editor').type('Bawdsey123!');
  }

  emailError(){
    cy.contains('Please input email').should('be.visible');
  }

  passwordOrEmailError(){
  cy.contains('Wrong email or password').should('be.visible');
  }

  passwordError(){
    cy.contains('Please input password').should('be.visible');
  }

  loginButton(){
    cy.get('.el-button__content').click();
  }
};

export default loginPage;