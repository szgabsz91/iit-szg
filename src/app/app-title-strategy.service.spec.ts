import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RouterStateSnapshot } from '@angular/router';
import { createSpyFromClass } from 'jasmine-auto-spies';
import { of } from 'rxjs';
import { AppTitleStrategyService } from './app-title-strategy.service';
import { AppService } from './app.service';
import { Course } from './model/course';

describe('AppTitleStrategyService', () => {
  let appTitleStrategyService: AppTitleStrategyService;
  let routerStateSnapshot: RouterStateSnapshot;

  const document: Document = { title: '' } as Document;
  const mockedCourses: Course[] = [
    {
      id: 'course1',
      name: 'Course 1',
      labs: [
        {
          index: 1,
          titles: {
            short: 'Course 1 Lab 1 Short',
            long: 'Course 1 Lab 1 Long'
          }
        },
        {
          index: 2,
          titles: {
            short: 'Course 1 Lab 2 Short',
            long: 'Course 1 Lab 2 Long'
          }
        }
      ]
    },
    {
      id: 'course2',
      name: 'Course 2',
      labs: [
        {
          index: 1,
          titles: {
            short: 'Course 2 Lab 1 Short',
            long: 'Course 2 Lab 1 Long'
          }
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
        { provide: DOCUMENT, useValue: document }
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
