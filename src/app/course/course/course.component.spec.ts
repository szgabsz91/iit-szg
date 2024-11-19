import { Component, DebugElement, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseComponent } from './course.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ActivatedRoute, Router, provideRouter } from '@angular/router';
import { Course } from '../../model/course';
import { Lab } from '../../model/lab';
import { By } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@Component({
  template: ` <app-course [course]="course" /> `,
  imports: [CourseComponent]
})
class CourseWrapperComponent {
  course: Course = {
    id: 'course1',
    name: 'Course 1',
    description: 'Course 1 Description',
    keywords: ['Course 1 Keyword'],
    labs: [
      {
        index: 1,
        titles: {
          short: 'Lab 1 Short',
          long: 'Lab 1 Long'
        },
        description: 'Lab 1 Description',
        keywords: ['Lab 1 Keyword']
      },
      {
        index: 2,
        titles: {
          short: 'Lab 2 Short',
          long: 'Lab 2 Long'
        },
        description: 'Lab 2 Description',
        keywords: ['Lab 2 Keyword']
      }
    ]
  };
}

describe('CourseComponent', () => {
  let wrapperFixture: ComponentFixture<CourseWrapperComponent>;
  let wrapperComponent: CourseWrapperComponent;
  let courseComponent: CourseComponent;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CourseWrapperComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {}
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        provideRouter([]),
        provideExperimentalZonelessChangeDetection()
      ]
    }).compileComponents();
  });

  beforeEach(async () => {
    wrapperFixture = TestBed.createComponent(CourseWrapperComponent);
    wrapperComponent = wrapperFixture.debugElement.componentInstance;
    courseComponent = wrapperFixture.debugElement.query(By.directive(CourseComponent)).componentInstance;
    router = TestBed.inject(Router);
    await wrapperFixture.whenStable();
  });

  describe('component', () => {
    describe('properties', () => {
      it('should contain the appropriate columns', () => {
        expect(courseComponent.columns).toEqual(['index', 'title']);
      });
    });

    describe('navigateToLab', () => {
      it('should navigate to the appropriate lab page', () => {
        spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));

        const lab: Lab = {
          index: 1,
          titles: {
            short: 'Lab 1 Short',
            long: 'Lab 1 Long'
          },
          description: 'Lab 1 Description',
          keywords: ['Lab 1 Keyword']
        };

        courseComponent.navigateToLab(lab);

        expect(router.navigate).toHaveBeenCalledWith(['./labs', lab.index], jasmine.any(Object));
      });
    });
  });

  describe('template', () => {
    it('should render the appropriate course name', () => {
      const courseName = wrapperFixture.debugElement.query(By.css('h2')).nativeElement.textContent;
      expect(courseName).toEqual(wrapperComponent.course.name);
    });

    it('should render the appropriate labs in a table', () => {
      const labTitles = wrapperFixture.debugElement
        .queryAll(By.css('tbody td:last-child'))
        .map((el: DebugElement) => el.nativeElement.textContent);
      const expectedLabTitles = wrapperComponent.course.labs.map(lab => lab.titles.long);
      expect(labTitles).toEqual(expectedLabTitles);
    });
  });
});
