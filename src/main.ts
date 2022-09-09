import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import './app/prettify/prettify';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import packageJson from '../package.json';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => console.log(`App version ${packageJson.version} loaded successfully`))
  .catch(err => console.error(err));
