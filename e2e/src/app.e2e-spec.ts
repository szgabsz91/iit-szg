import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('App', () => {

  let appPage: AppPage;

  beforeEach(async () => {
    appPage = new AppPage();
    await appPage.navigateTo();
  });

  it('should have the appropriate lang attribute on the html element', async () => {
    const lang = await appPage.getLang();
    expect(lang).toEqual('en');
  });

  it('should display the appropriate title', async () => {
    const title = await appPage.getTitle();
    expect(title).toEqual('IIT-SZG');
  });

  it('should display the language selector with the appropriate title', async () => {
    const selectedLanguage = await appPage.getSelectedLanguage();
    expect(selectedLanguage).toEqual('English');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
