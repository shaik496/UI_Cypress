import testData from '/Users/meeravalishaik/Desktop/Shaik/WorkSpace/Active/UI_Cypress/cypress/fixtures/testData.json';
Cypress.Commands.add("LaunchURL", () => {
    cy.visit(testData.testu);
    cy.visit(testData.testu);
    cy.title().should('eq', 'Register: Mercury Tours');
  });