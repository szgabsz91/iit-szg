import { browser, by, element } from 'protractor';

export class CoursePage {

  navigateTo() {
    return browser.get(`${browser.baseUrl}/courses/course1`) as Promise<any>;
  }

  getTitle() {
    return element(by.css('h2')).getText() as Promise<string>;
  }

  getLabTitles() {
    return element.all(by.css('table tbody tr td:last-child'))
      .map(el => el.getText()) as Promise<string[]>;
  }

}
