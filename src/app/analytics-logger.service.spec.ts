import { AnalyticsLogger } from './analytics-logger.service';

describe('AnalyticsLogger', () => {

  const googleAnalyticsTrackingId = 'trackingId';

  let analyticsLogger: AnalyticsLogger;
  let mockGtag: (arg1: string, arg2: string, arg3: { readonly 'page_path': string }) => void;

  beforeEach(() => {
    mockGtag = jasmine.createSpy();
    analyticsLogger = new AnalyticsLogger(mockGtag, googleAnalyticsTrackingId);
  });

  describe('log', () => {

    it('should log the given URL as page visit in Google Analytics', () => {
      const url = '/url';

      analyticsLogger.log(url);

      expect(mockGtag).toHaveBeenCalledTimes(1);
      expect(mockGtag).toHaveBeenCalledWith('config', googleAnalyticsTrackingId, {
        page_path: url
      });
    });

  });

});
