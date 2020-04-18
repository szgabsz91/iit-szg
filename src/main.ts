import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Github Pages hard refresh fix
let { redirect } = sessionStorage;
delete sessionStorage.redirect;
if (redirect && redirect !== location.href) {
  const localeId = location.pathname.indexOf('/hu/') > -1 ? 'hu' : 'en';
  const otherLocaleId = localeId === 'en' ? 'hu' : 'en';
  redirect = redirect.replace('/' + otherLocaleId + '/', '/' + localeId + '/');
  history.replaceState(null, null, redirect);
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
