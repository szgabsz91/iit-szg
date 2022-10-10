import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CourseServiceModule } from './course/course-service.module';
import { WINDOW, GTAG, GOOGLE_ANALYTICS_TRACKING_ID } from './injection-tokens';
import { AnalyticsService } from './services/analytics/analytics.service';
import { AnalyticsLogger } from './services/analytics/analytics-logger.service';
import { AnalyticsLoggerMock } from './services/analytics/analytics-logger.mock';
import { environment } from 'src/environments/environment';
import { ScrollContentAfterNavigationDirective } from './directives/scroll-content-after-navigation/scroll-content-after-navigation.directive';
import { AppTitleStrategyService } from './services/seo/app-title-strategy/app-title-strategy.service';
import { MetaService } from './services/seo/meta/meta.service';
import { CanonicalLinkService } from './services/seo/canonical-link/canonical-link.service';

// eslint-disable-next-line @typescript-eslint/naming-convention
declare let gtag: (arg1: string, arg2: string, arg3: { readonly page_path: string }) => void;

@NgModule({
  declarations: [AppComponent, HomeComponent, ScrollContentAfterNavigationDirective],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    CourseServiceModule
  ],
  providers: [
    {
      provide: WINDOW,
      useValue: window
    },
    {
      provide: GTAG,
      useValue: gtag
    },
    {
      provide: GOOGLE_ANALYTICS_TRACKING_ID,
      useValue: environment.googleAnalyticsTrackingId
    },
    {
      provide: AnalyticsLogger,
      useFactory: (
        // eslint-disable-next-line @typescript-eslint/no-shadow, @typescript-eslint/naming-convention
        gtag: (arg1: string, arg2: string, arg3: { readonly page_path: string }) => void,
        googleAnalyticsTrackingId
      ) => (environment.production ? new AnalyticsLogger(gtag, googleAnalyticsTrackingId) : new AnalyticsLoggerMock()),
      deps: [GTAG, GOOGLE_ANALYTICS_TRACKING_ID]
    },
    AnalyticsService,
    {
      provide: APP_INITIALIZER,
      useFactory: (analyticsService: AnalyticsService) => () => analyticsService.startLogging(),
      deps: [AnalyticsService],
      multi: true
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
