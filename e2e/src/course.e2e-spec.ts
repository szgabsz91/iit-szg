import { CoursePage } from './course.po';
import { browser, logging } from 'protractor';

describe('Course', () => {

  let coursePage: CoursePage;

  beforeEach(() => {
    coursePage = new CoursePage();
    return coursePage.navigateTo();
  });

  it('should display the appropriate title', () => {
    const title = coursePage.getTitle();
    expect(title).toEqual('Course 1');
  });

  it('should display the appropriate labs', () => {
    const labTitles = coursePage.getLabTitles();
    expect(labTitles).toEqual(['Lab 1', 'Lab 2', 'Lab 3']);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
