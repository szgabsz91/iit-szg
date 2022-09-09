import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AnalyticsLogger } from './analytics-logger.service';

@Injectable()
export class AnalyticsService {
  private readonly localeId: string;

  constructor(
    @Inject(LOCALE_ID) readonly locale: string,
    private readonly router: Router,
    private readonly analyticsLogger: AnalyticsLogger
  ) {
    this.localeId = locale.substring(0, 2);
  }

  startLogging(): void {
    this.router.events
      .pipe(filter((event: Event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = `/${this.localeId}${event.urlAfterRedirects}`;
        this.analyticsLogger.log(url);
      });
  }
}
