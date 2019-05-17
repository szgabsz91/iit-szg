import { browser, by, element } from 'protractor';

export class HomePage {

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitle() {
    return element(by.css('mat-card-title')).getText() as Promise<string>;
  }

  getParagraphCount() {
    return element.all(by.css('mat-card-content p')).count() as Promise<number>;
  }

}
