import { browser, $, $$ } from 'protractor';

export class LabPage {

  async navigateTo(): Promise<void> {
    return browser.get(`${browser.baseUrl}/courses/xml/labs/1`);
  }

  async getTitle(): Promise<string> {
    return $('mat-card-title').getText();
  }

  async getMarkdownContent(): Promise<string[]> {
    return $$('markdown > *')
      .map(async el => await el.getText());
  }

}
