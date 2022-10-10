import { DOCUMENT } from '@angular/common';
import { RendererFactory2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NavigationEnd, Router } from '@angular/router';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { of } from 'rxjs';
import { Course } from '../../../model/course';
import { AppService } from '../../app/app.service';
import { defaultSeoInformation, MetaService } from './meta.service';

describe('MetaService', () => {
  let metaService: MetaService;
  let router: Spy<Router>;
  let appService: Spy<AppService>;
  let descriptionMeta: HTMLElement;
  let keywordsMeta: HTMLElement;

  const courses: readonly Course[] = [
    {
      id: 'xml',
      name: 'XML',
      description: 'XML Description',
      keywords: ['XML Keyword'],
      labs: [
        {
          index: 1,
          titles: {
            long: 'XML'
          },
          description: 'XML Lab 1 Description',
          keywords: ['XML Lab 1 Keyword']
        }
      ]
    }
  ];

  beforeEach(() => {
    router = createSpyFromClass(Router, {
      observablePropsToSpyOn: ['events']
    });

    appService = createSpyFromClass(AppService, ['getCourses']);
    appService.getCourses.and.returnValue(of(courses));

    const querySelector = jasmine.createSpy();
    descriptionMeta = document.createElement('meta');
    keywordsMeta = document.createElement('meta');
    querySelector.and.callFake((selector: string) =>
      selector.includes('description') ? descriptionMeta : keywordsMeta
    );

    const renderer = {
      setAttribute: (element: HTMLElement, name: string, value: string) => element.setAttribute(name, value)
    };
    const rendererFactory = {
      createRenderer: () => renderer
    };

    TestBed.configureTestingModule({
      providers: [
        MetaService,
        { provide: Router, useValue: router },
        { provide: AppService, useValue: appService },
        { provide: DOCUMENT, useValue: { querySelector } },
        { provide: RendererFactory2, useValue: rendererFactory }
      ]
    });
  });

  beforeEach(() => {
    metaService = TestBed.inject(MetaService);
    metaService.start();
  });

  describe('on a lab page with an unknown courseId', () => {
    beforeEach(() => {
      router.events.nextOneTimeWith(new NavigationEnd(1, '', '/courses/db/labs/1'));
    });

    it('should return the default SEO information', () => {
      expect(descriptionMeta.getAttribute('content')).toBe(defaultSeoInformation.description);
      expect(keywordsMeta.getAttribute('content')).toBe(defaultSeoInformation.keywords.join(', '));
    });
  });

  describe('on a lab page with an unknown labId', () => {
    beforeEach(() => {
      router.events.nextOneTimeWith(new NavigationEnd(1, '', '/courses/xml/labs/2'));
    });

    it('should return the default SEO information', () => {
      expect(descriptionMeta.getAttribute('content')).toBe(defaultSeoInformation.description);
      expect(keywordsMeta.getAttribute('content')).toBe(defaultSeoInformation.keywords.join(', '));
    });
  });

  describe('on a known lab page', () => {
    beforeEach(() => {
      router.events.nextOneTimeWith(new NavigationEnd(1, '', '/courses/xml/labs/1'));
    });

    it('should return the SEO information for the given lab', () => {
      expect(descriptionMeta.getAttribute('content')).toBe(courses[0].labs[0].description);
      expect(keywordsMeta.getAttribute('content')).toBe(courses[0].labs[0].keywords.join(', '));
    });
  });

  describe('on a course page with an unknown courseId', () => {
    beforeEach(() => {
      router.events.nextOneTimeWith(new NavigationEnd(1, '', '/courses/db'));
    });

    it('should return the default SEO information', () => {
      expect(descriptionMeta.getAttribute('content')).toBe(defaultSeoInformation.description);
      expect(keywordsMeta.getAttribute('content')).toBe(defaultSeoInformation.keywords.join(', '));
    });
  });

  describe('on a known course page', () => {
    beforeEach(() => {
      router.events.nextOneTimeWith(new NavigationEnd(1, '', '/courses/xml'));
    });

    it('should return the SEO information for the given course', () => {
      expect(descriptionMeta.getAttribute('content')).toBe(courses[0].description);
      expect(keywordsMeta.getAttribute('content')).toBe(courses[0].keywords.join(', '));
    });
  });

  describe('on another page', () => {
    beforeEach(() => {
      router.events.nextOneTimeWith(new NavigationEnd(1, '', '/other'));
    });

    it('should return the default SEO information', () => {
      expect(descriptionMeta.getAttribute('content')).toBe(defaultSeoInformation.description);
      expect(keywordsMeta.getAttribute('content')).toBe(defaultSeoInformation.keywords.join(', '));
    });
  });
});
