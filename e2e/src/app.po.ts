import { browser, $ } from 'protractor';

export class AppPage {

  async navigateTo(): Promise<string> {
    return browser.get(browser.baseUrl);
  }

  async getLang(): Promise<string> {
    return $('html').getAttribute('lang');
  }

  async getTitle(): Promise<string> {
    return $('mat-toolbar h1').getText();
  }

  async getSelectedLanguage(): Promise<string> {
    const selectedLanguage = $('.mat-select-value-text span');
    return browser.executeScript('return arguments[0].textContent;', selectedLanguage);
  }

}
