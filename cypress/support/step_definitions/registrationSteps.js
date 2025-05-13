import '../commands'; // Correct the import path to reference the commands file
const { Given } = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the registration page', () => {
  cy.LaunchURL(); 
  cy.get("[name='firstName']").type("John");
  cy.get("[name='lastName']").type("AB");
  cy.get("[name='phone']").type("1234567890");
  cy.get("[name='userName']").type("JohnAB@gmail.com");
  cy.get("[name='address1']").type("123 Main St");
  cy.get("[name='city']").type("Hyderabad");
  cy.get("[name='state']").type("Telangana");
  cy.get("[name='postalCode']").type("500081");
  cy.DropDownValue("[name='country']", "INDIA");
  cy.get("[name='email']").type("JohnAB");
  cy.get("[name='password']").type("JohnAB");
  cy.get("[name='confirmPassword']").type("JohnAB");
  cy.get("[name='submit']").click();
});