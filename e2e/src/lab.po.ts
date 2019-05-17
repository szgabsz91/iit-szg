import { browser, by, element } from 'protractor';

export class LabPage {

  navigateTo() {
    return browser.get(`${browser.baseUrl}/courses/course1/labs/1`) as Promise<any>;
  }

  getTitle() {
    return element(by.css('mat-card-title')).getText() as Promise<string>;
  }

  getMarkdownContent() {
    return element.all(by.css('markdown > *'))
      .map(el => el.getText()) as Promise<string[]>;
  }

}
