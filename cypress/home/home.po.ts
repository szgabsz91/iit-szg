export class HomePage {
  get title(): Cypress.Chainable<string | string[]> {
    return cy.get('mat-card-title').text();
  }

  get paragraphs(): Cypress.Chainable {
    return cy.get('mat-card-content p');
  }

  get listItems(): Cypress.Chainable {
    return cy.get('mat-card-content li');
  }

  navigateTo(): Cypress.Chainable {
    return cy.visit('/');
  }
}
