import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('App', () => {

  let appPage: AppPage;

  beforeEach(() => {
    appPage = new AppPage();
    return appPage.navigateTo();
  });

  it('should display the appropriate title', () => {
    expect(appPage.getTitle()).toEqual('iit-www');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
