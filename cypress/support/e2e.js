import './commands'; // Ensure this line is present to load custom commands
require('cypress-xpath'); // Ensure cypress-xpath is imported if using XPath selectors

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});