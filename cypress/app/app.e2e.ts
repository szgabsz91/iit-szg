import { AppPage } from './app.po';

describe('App', () => {
  let appPage: AppPage;

  beforeEach(() => {
    appPage = new AppPage();
    appPage.navigateTo();
  });

  it('should have the appropriate lang attribute on the html element', () => {
    appPage.lang.should('equal', 'en');
  });

  it('should display the appropriate title as the logo alt attribute', () => {
    appPage.title.should('equal', 'IIT-SZG');
  });

  it('should display the language selector with the appropriate title', () => {
    appPage.selectedLanguage.should('equal', 'English');
  });
});
