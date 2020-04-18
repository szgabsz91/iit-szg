import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getLang() {
    return element(by.css('html')).getAttribute('lang') as Promise<string>;
  }

  getTitle() {
    return element(by.css('mat-toolbar h1')).getText() as Promise<string>;
  }

}
