import { HomePage } from './home.po';

describe('Home', () => {
  let homePage: HomePage;

  beforeEach(() => {
    homePage = new HomePage();
    homePage.navigateTo();
  });

  it('should display the appropriate title', () => {
    homePage.title.should('equal', 'Home');
  });

  it('should display the appropriate number of paragraphs', () => {
    homePage.paragraphs.should('have.a.lengthOf', 2);
  });
});
