import './commands'; 
const { Given } = require('@badeball/cypress-cucumber-preprocessor');


Given('I am on the registration page', () => {
  cy.LaunchURL();  
});