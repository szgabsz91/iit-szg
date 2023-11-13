import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { Course } from '../model/course';
import { CourseService } from './course.service';
import { resolveCourse } from './course.resolver';

describe('CourseResolver', () => {
  const mockedCourse: Course = {
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
  const activatedRouteSnapshot: ActivatedRouteSnapshot = {
    paramMap: {
      get: (paramName: string) => {
        switch (paramName) {
          case 'courseId':
            return mockedCourse.id;

          default:
            throw new Error(`Unknown parameter name: ${paramName}`);
        }
      }
    }
  } as any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  beforeEach(() => {
    const courseService = TestBed.inject(CourseService);
    spyOn(courseService, 'getCourse').and.callFake((...args) => {
      const courseId = args[0];

      if (courseId === mockedCourse.id) {
        return of(mockedCourse);
      }

      return EMPTY;
    });
  });

  it('should fetch the appropriate Course model based on the courseId route parameter', done => {
    TestBed.runInInjectionContext(() => {
      const result = resolveCourse(activatedRouteSnapshot, undefined) as Observable<Course>;
      result.subscribe((course: Course) => {
        expect(course).toEqual(mockedCourse);
        done();
      });
    });
  });
});
