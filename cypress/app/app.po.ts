export class AppPage {
  get lang(): Cypress.Chainable<string | string[]> {
    return cy.get('html').attribute('lang');
  }

  get title(): Cypress.Chainable<string | string[]> {
    return cy.get('mat-toolbar h1 a img').attribute('alt');
  }

  get selectedLanguage(): Cypress.Chainable<string | string[]> {
    return cy.get('.mat-select-value-text span').text();
  }

  navigateTo(): Cypress.Chainable {
    return cy.visit('/');
  }
}
