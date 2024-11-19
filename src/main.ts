import {
  enableProdMode,
  importProvidersFrom,
  provideExperimentalZonelessChangeDetection,
  inject,
  provideAppInitializer
} from '@angular/core';

import './app/prettify/prettify';
import { environment } from './environments/environment';

import packageJson from '../package.json';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, RouterModule, TitleStrategy, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { WINDOW } from './app/injection-tokens';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppTitleStrategyService } from './app/services/seo/app-title-strategy/app-title-strategy.service';
import { MetaService } from './app/services/seo/meta/meta.service';
import { CanonicalLinkService } from './app/services/seo/canonical-link/canonical-link.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: WINDOW,
      useValue: window
    },
    {
      provide: TitleStrategy,
      useClass: AppTitleStrategyService
    },
    provideAppInitializer(() => {
      const metaService = inject(MetaService);
      metaService.start();
    }),
    provideAppInitializer(() => {
      const canonicalLinkService = inject(CanonicalLinkService);
      canonicalLinkService.start();
    }),
    importProvidersFrom(
      ServiceWorkerModule.register('/ngsw-worker.js', {
        enabled: environment.production,
        registrationStrategy: 'registerWhenStable:30000'
      })
    ),
    provideAnimationsAsync(),
    importProvidersFrom(
      RouterModule.forRoot([], {
        paramsInheritanceStrategy: 'always',
        scrollPositionRestoration: 'enabled'
      })
    ),
    provideRouter(
      [
        {
          path: '',
          pathMatch: 'full',
          component: HomeComponent
        },
        {
          path: 'courses/:courseId',
          children: [
            {
              path: '',
              loadChildren: () => import('./app/course/course.routes').then(m => m.courseRoutes)
            },
            {
              path: 'labs/:labIndex',
              loadChildren: () => import('./app/lab/lab.routes').then(m => m.labRoutes)
            }
          ]
        }
      ],
      withComponentInputBinding()
    ),
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(withInterceptorsFromDi())
  ]
})
  .then(() => console.log(`App version ${packageJson.version} loaded successfully`))
  .catch(err => console.error(err));
