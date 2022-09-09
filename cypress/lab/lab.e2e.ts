import { LabPage } from './lab.po';

describe('Lab', () => {
  let labPage: LabPage;

  beforeEach(() => {
    labPage = new LabPage();
    labPage.navigateTo();
  });

  it('should display the appropriate title', () => {
    labPage.title.should('equal', 'Lab 1: XDM, XML');
  });

  it('should display the appropriate markdown content', () => {
    labPage.markdownContent.should('have.length.above', 0);
  });
});
