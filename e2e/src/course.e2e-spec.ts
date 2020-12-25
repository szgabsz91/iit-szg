import { CoursePage } from './course.po';
import { browser, logging } from 'protractor';

describe('Course', () => {

  let coursePage: CoursePage;

  beforeEach(async () => {
    coursePage = new CoursePage();
    await coursePage.navigateTo();
  });

  it('should display the appropriate title', async () => {
    const title = await coursePage.getTitle();
    expect(title).toEqual('XML');
  });

  it('should display the appropriate labs', async () => {
    const labTitles = await coursePage.getLabTitles();
    expect(labTitles.length).toBeGreaterThan(0);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
