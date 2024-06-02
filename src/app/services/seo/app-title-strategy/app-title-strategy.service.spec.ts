import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RouterStateSnapshot } from '@angular/router';
import { createSpyFromClass } from 'jasmine-auto-spies';
import { of } from 'rxjs';
import { AppTitleStrategyService } from './app-title-strategy.service';
import { AppService } from '../../app/app.service';
import { Course } from '../../../model/course';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('AppTitleStrategyService', () => {
  let appTitleStrategyService: AppTitleStrategyService;
  let routerStateSnapshot: RouterStateSnapshot;

  const document: Document = { title: '' } as Document;
  const mockedCourses: Course[] = [
    {
      id: 'course1',
      name: 'Course 1',
      description: 'Course 1 Description',
      keywords: ['Course 1 Keyword'],
      labs: [
        {
          index: 1,
          titles: {
            short: 'Course 1 Lab 1 Short',
            long: 'Course 1 Lab 1 Long'
          },
          description: 'Course 1 Lab 1 Description',
          keywords: ['Course 1 Lab 1 Keyword']
        },
        {
          index: 2,
          titles: {
            short: 'Course 1 Lab 2 Short',
            long: 'Course 1 Lab 2 Long'
          },
          description: 'Course 1 Lab 2 Description',
          keywords: ['Course 1 Lab 2 Keyword']
        }
      ]
    },
    {
      id: 'course2',
      name: 'Course 2',
      description: 'Course 2 Description',
      keywords: ['Course 2 Keyword'],
      labs: [
        {
          index: 1,
          titles: {
            short: 'Course 2 Lab 1 Short',
            long: 'Course 2 Lab 1 Long'
          },
          description: 'Course 2 Lab 1 Description',
          keywords: ['Course 2 Lab 1 Keyword']
        }
      ]
    }
  ];

  beforeEach(() => {
    const appService = createSpyFromClass(AppService);
    appService.getCourses.and.returnValue(of(mockedCourses));

    TestBed.configureTestingModule({
      providers: [
        AppTitleStrategyService,
        { provide: AppService, useValue: appService },
        { provide: DOCUMENT, useValue: document },
        provideExperimentalZonelessChangeDetection()
      ]
    });
  });

  beforeEach(() => {
    appTitleStrategyService = TestBed.inject(AppTitleStrategyService);
  });

  describe('without courseId', () => {
    beforeEach(() => {
      routerStateSnapshot = {
        url: ''
      } as RouterStateSnapshot;
    });

    it('should set the title to Home', () => {
      appTitleStrategyService.updateTitle(routerStateSnapshot);
      expect(document.title).toBe('IIT-SZG - Home');
    });
  });

  describe('with an unknown course', () => {
    beforeEach(() => {
      routerStateSnapshot = {
        url: '/courses/unknown'
      } as RouterStateSnapshot;
    });

    it('should set the title to the application title', () => {
      appTitleStrategyService.updateTitle(routerStateSnapshot);
      expect(document.title).toBe('IIT-SZG');
    });
  });

  describe('without a labId', () => {
    beforeEach(() => {
      routerStateSnapshot = {
        url: '/courses/course1'
      } as RouterStateSnapshot;
    });

    it('should set the title to the course title', () => {
      appTitleStrategyService.updateTitle(routerStateSnapshot);
      expect(document.title).toBe(`IIT-SZG - ${mockedCourses[0].name} Course`);
    });
  });

  describe('with an unknown lab', () => {
    beforeEach(() => {
      routerStateSnapshot = {
        url: '/courses/course1/labs/3'
      } as RouterStateSnapshot;
    });

    it('should set the title to the course title', () => {
      appTitleStrategyService.updateTitle(routerStateSnapshot);
      expect(document.title).toBe(`IIT-SZG - ${mockedCourses[0].name} Course`);
    });
  });

  describe('with a course and a lab', () => {
    beforeEach(() => {
      routerStateSnapshot = {
        url: '/courses/course1/labs/2'
      } as RouterStateSnapshot;
    });

    it('should set the title to the lab title', () => {
      appTitleStrategyService.updateTitle(routerStateSnapshot);
      expect(document.title).toBe(
        `IIT-SZG - ${mockedCourses[0].name} Course - ${mockedCourses[0].labs[1].titles.long}`
      );
    });
  });
});
