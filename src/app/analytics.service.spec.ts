import { AnalyticsService } from './analytics.service';
import { NavigationStart, NavigationEnd, Event } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AnalyticsLogger } from './analytics-logger.service';

describe('AnalyticsService', () => {

  const locale = 'en-US';

  let analyticsService: AnalyticsService;
  let analyticsLogger: AnalyticsLogger;

  beforeEach(() => {
    const eventsSubject$ = new BehaviorSubject<Event>(new NavigationStart(1, ''));
    eventsSubject$.next(new NavigationEnd(2, '', '/url'));
    const router = {
      events: eventsSubject$.asObservable() as any
    } as any;
    analyticsLogger = {
      log: jasmine.createSpy()
    } as any;
    analyticsService = new AnalyticsService(locale, router, analyticsLogger);
  });

  describe('startLogging', () => {

    it('should log a page visit after every NavigationEnd event', () => {
      analyticsService.startLogging();

      expect(analyticsLogger.log).toHaveBeenCalledTimes(1);
      expect(analyticsLogger.log).toHaveBeenCalledWith('/en/url');
    });

  });

});
