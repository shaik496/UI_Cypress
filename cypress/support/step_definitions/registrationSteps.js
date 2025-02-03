import '../commands'; // Correct the import path to reference the commands file
const { Given } = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the registration page', () => {
  cy.LaunchURL(); 
  cy.get("[name='firstName']").type("John");
  cy.get("[name='lastName']").type("AB");
  cy.DropDownValue("[name='country']", "INDIA");

});