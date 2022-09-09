export class HomePage {
  get title(): Cypress.Chainable<string | string[]> {
    return cy.get('mat-card-title').text();
  }

  get paragraphs(): Cypress.Chainable {
    return cy.get('mat-card-content p');
  }

  navigateTo(): Cypress.Chainable {
    return cy.visit('/');
  }
}
