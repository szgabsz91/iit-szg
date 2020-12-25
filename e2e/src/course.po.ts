import { browser, $, $$ } from 'protractor';

export class CoursePage {

  async navigateTo(): Promise<void> {
    return browser.get(`${browser.baseUrl}/courses/xml`);
  }

  async getTitle(): Promise<string> {
    return $('h2').getText();
  }

  async getLabTitles(): Promise<string[]> {
    return $$('table tbody tr td:last-child')
      .map(async el => await el.getText());
  }

}
