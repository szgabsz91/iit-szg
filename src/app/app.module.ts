import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CourseServiceModule } from './course/course-service.module';
import { WINDOW, GTAG, GOOGLE_ANALYTICS_TRACKING_ID } from './injection-tokens';
import { AnalyticsService } from './analytics.service';
import { AnalyticsLogger } from './analytics-logger.service';
import { AnalyticsLoggerMock } from './analytics-logger.mock';
import { environment } from 'src/environments/environment';

declare let gtag: (arg1: string, arg2: string, arg3: { readonly page_path: string }) => void;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
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
        // tslint:disable-next-line: no-shadowed-variable
        gtag: (arg1: string, arg2: string, arg3: { readonly page_path: string }) => void,
        googleAnalyticsTrackingId
      ) => {
        return environment.production ? new AnalyticsLogger(gtag, googleAnalyticsTrackingId) : new AnalyticsLoggerMock();
      },
      deps: [GTAG, GOOGLE_ANALYTICS_TRACKING_ID]
    },
    AnalyticsService,
    {
      provide: APP_INITIALIZER,
      useFactory: (analyticsService: AnalyticsService) => () => analyticsService.startLogging(),
      deps: [AnalyticsService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
