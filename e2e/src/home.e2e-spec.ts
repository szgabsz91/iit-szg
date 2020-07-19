import { HomePage } from './home.po';
import { browser, logging } from 'protractor';

describe('Home', () => {

  let homePage: HomePage;

  beforeEach(async () => {
    homePage = new HomePage();
    await homePage.navigateTo();
  });

  it('should display the appropriate title', async () => {
    const title = await homePage.getTitle();
    expect(title).toEqual('Home');
  });

  it('should display the appropriate number of paragraphs', async () => {
    const paragraphCount = await homePage.getParagraphCount();
    expect(paragraphCount).toEqual(2);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
