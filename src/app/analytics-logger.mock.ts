import { Injectable } from '@angular/core';

@Injectable()
export class AnalyticsLoggerMock {

  log(url: string): void {
    console.log('[Analytics]', url);
  }

}
