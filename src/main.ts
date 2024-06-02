import { APP_INITIALIZER, enableProdMode, importProvidersFrom, inject } from '@angular/core';

import './app/prettify/prettify';
import { environment } from './environments/environment';

import packageJson from '../package.json';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Router, RouterModule, TitleStrategy, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { WINDOW } from './app/injection-tokens';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppTitleStrategyService } from './app/services/seo/app-title-strategy/app-title-strategy.service';
import { MetaService } from './app/services/seo/meta/meta.service';
import { CanonicalLinkService } from './app/services/seo/canonical-link/canonical-link.service';

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
    {
      provide: APP_INITIALIZER,
      useFactory: (metaService: MetaService) => () => metaService.start(),
      deps: [MetaService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (canonicalLinkService: CanonicalLinkService) => () => canonicalLinkService.start(),
      deps: [CanonicalLinkService],
      multi: true
    },
    importProvidersFrom(
      ServiceWorkerModule.register('/ngsw-worker.js', {
        enabled: environment.production,
        registrationStrategy: 'registerWhenStable:30000'
      })
    ),
    provideAnimationsAsync(),
    importProvidersFrom(HttpClientModule),
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
      withComponentInputBinding(),
      withViewTransitions({
        onViewTransitionCreated: ({ /*transition*/ }) => {
          const router = inject(Router);
          /*const targetUrl = router.getCurrentNavigation()!.finalUrl!;
          // Skip the transition if the only thing
          // changing is the fragment and queryParams
          const config = {
            paths: 'exact',
            matrixParams: 'exact',
            fragment: 'ignored',
            queryParams: 'ignored',
          };

          if (router.isActive(targetUrl, config)) {
            transition.skipTransition();
          }*/
          console.log(router.getCurrentNavigation());
        },
      })
    )
  ]
})
  .then(() => console.log(`App version ${packageJson.version} loaded successfully`))
  .catch(err => console.error(err));
