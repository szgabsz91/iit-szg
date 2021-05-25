import { LabPage } from './lab.po';
import { browser, logging } from 'protractor';

describe('Lab', () => {

  let labPage: LabPage;

  beforeEach(async () => {
    labPage = new LabPage();
    await labPage.navigateTo();
  });

  it('should display the appropriate title', async () => {
    const title = await labPage.getTitle();
    expect(title).toEqual('Lab 1: Lab 1');
  });

  it('should display the appropriate markdown content', async () => {
    const markdownContent = await labPage.getMarkdownContent();
    expect(markdownContent.length).toBeGreaterThan(0);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
