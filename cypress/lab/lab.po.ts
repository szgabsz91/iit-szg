export class LabPage {

  get title(): Cypress.Chainable<string | string[]> {
    return cy.get('mat-card-title').text();
  }

  get markdownContent(): Cypress.Chainable {
    return cy.get('markdown > *');
  }

  navigateTo(): Cypress.Chainable {
    return cy.visit('/courses/xml/labs/1');
  }

}
