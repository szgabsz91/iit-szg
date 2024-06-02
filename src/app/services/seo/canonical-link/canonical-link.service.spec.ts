import { DOCUMENT } from '@angular/common';
import { LOCALE_ID, RendererFactory2, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NavigationEnd, Router } from '@angular/router';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { CanonicalLinkService } from './canonical-link.service';

describe('CanonicalLinkService', () => {
  let canonicalLinkService: CanonicalLinkService;
  let router: Spy<Router>;
  let canonicalLink: HTMLElement;
  const localeId = 'hu';

  beforeEach(() => {
    router = createSpyFromClass(Router, {
      observablePropsToSpyOn: ['events']
    });

    const querySelector = jasmine.createSpy();
    canonicalLink = document.createElement('link');
    querySelector.and.returnValue(canonicalLink);

    const renderer = {
      setAttribute: (element: HTMLElement, name: string, value: string) => element.setAttribute(name, value)
    };
    const rendererFactory = {
      createRenderer: () => renderer
    };

    TestBed.configureTestingModule({
      providers: [
        CanonicalLinkService,
        { provide: Router, useValue: router },
        { provide: LOCALE_ID, useValue: localeId },
        { provide: DOCUMENT, useValue: { querySelector } },
        { provide: RendererFactory2, useValue: rendererFactory },
        provideExperimentalZonelessChangeDetection()
      ]
    });
  });

  beforeEach(() => {
    canonicalLinkService = TestBed.inject(CanonicalLinkService);
    canonicalLinkService.start();
  });

  describe('after navigation', () => {
    const url = '/courses/db/labs/1';

    beforeEach(() => {
      router.events.nextOneTimeWith(new NavigationEnd(1, '', url));
    });

    it('should update the canonical link', () => {
      expect(canonicalLink.getAttribute('href')).toBe(`https://iit-szg.web.app/${localeId}${url}`);
    });
  });
});
