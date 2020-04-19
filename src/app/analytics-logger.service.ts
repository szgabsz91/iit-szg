import { Injectable, Inject } from '@angular/core';
import { GTAG, GOOGLE_ANALYTICS_TRACKING_ID } from './injection-tokens';

@Injectable()
export class AnalyticsLogger {

  constructor(
    @Inject(GTAG) private readonly gtag: (arg1: string, arg2: string, arg3: { readonly 'page_path': string }) => void,
    @Inject(GOOGLE_ANALYTICS_TRACKING_ID) private readonly trackingId: string) {}

  log(url: string): void {
    this.gtag('config', this.trackingId, {
      page_path: url
    });
  }

}
