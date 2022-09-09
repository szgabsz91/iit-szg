export class CoursePage {
  get title(): Cypress.Chainable<string | string[]> {
    return cy.get('h2').text();
  }

  get labTitles(): Cypress.Chainable<string | string[]> {
    return cy.get('table tbody tr td:last-child').text();
  }

  navigateTo(): Cypress.Chainable {
    return cy.visit('/courses/xml');
  }
}
