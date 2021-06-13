import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import './app/prettify/prettify';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { version } from '../package.json';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => console.log(`App version ${version} loaded successfully`))
  .catch(err => console.error(err));
