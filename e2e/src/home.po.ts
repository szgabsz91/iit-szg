import { browser, $, $$ } from 'protractor';

export class HomePage {

  async navigateTo(): Promise<void> {
    return browser.get(browser.baseUrl);
  }

  async getTitle(): Promise<string> {
    return $('mat-card-title').getText();
  }

  async getParagraphCount(): Promise<number> {
    return $$('mat-card-content p').count();
  }

}
