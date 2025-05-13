import testData from '/Users/meeravalishaik/Desktop/Shaik/WorkSpace/Active/UI_Cypress/cypress/fixtures/testData.json';
Cypress.Commands.add("LaunchURL", () => {
    cy.visit(testData.testURL);
    cy.title().should('eq', 'Register: Mercury Tours');
  });


  Cypress.Commands.add("DropDownValue", (xpath,value) => {
    cy.get(xpath).select(value);
  
  });