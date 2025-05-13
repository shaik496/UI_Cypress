
import OR from './OR.json'; 

Cypress.Commands.add("Contact_Information", (xpath,value) => {
  cy.get(OR.Contact_Information.firstName).type("AB");
  cy.get(OR.Contact_Information.lastname).type("1234567890");
  });