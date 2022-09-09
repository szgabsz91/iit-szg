import { CoursePage } from './course.po';

describe('Course', () => {

  let coursePage: CoursePage;

  beforeEach(() => {
    coursePage = new CoursePage();
    coursePage.navigateTo();
  });

  it('should display the appropriate title', () => {
    coursePage.title.should('equal', 'XML');
  });

  it('should display the appropriate labs', () => {
    coursePage.labTitles.should('have.length.above', 0);
  });

});
