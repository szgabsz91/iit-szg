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
import { WINDOW } from './injection-tokens';
import { ScrollContentAfterNavigationDirective } from './directives/scroll-content-after-navigation/scroll-content-after-navigation.directive';
import { AppTitleStrategyService } from './services/seo/app-title-strategy/app-title-strategy.service';
import { MetaService } from './services/seo/meta/meta.service';
import { CanonicalLinkService } from './services/seo/canonical-link/canonical-link.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, HomeComponent, ScrollContentAfterNavigationDirective],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    CourseServiceModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
