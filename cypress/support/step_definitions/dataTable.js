import '../commands'; // Ensure this line is present to load custom commands
require('cypress-xpath'); // Ensure cypress-xpath is imported if using XPath selectors

const { Given } = require('@badeball/cypress-cucumber-preprocessor');

Given('user checking table', () => {
  cy.visit("https://demo.guru99.com/test/web-table-element.php");

  // Get the number of rows in the table
  cy.xpath("//table[@class='dataTable']//tr").then((rows) => {
    cy.log("Total rows in table: " + rows.length);

    
  });
});