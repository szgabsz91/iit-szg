import { LabPage } from './lab.po';
import { browser, logging } from 'protractor';

describe('Lab', () => {

  let labPage: LabPage;

  beforeEach(() => {
    labPage = new LabPage();
    return labPage.navigateTo();
  });

  it('should display the appropriate title', () => {
    const title = labPage.getTitle();
    expect(title).toEqual('Lab 1: Lab 1');
  });

  it('should display the appropriate markdown content', () => {
    const markdownContent = labPage.getMarkdownContent();
    expect(markdownContent).toEqual([
      'Course 1 - Lab 1',
      'Starter project',
      'Solution project'
    ]);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
