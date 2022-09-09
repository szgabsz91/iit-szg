import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of, EMPTY } from 'rxjs';
import { Course } from '../model/course';
import { CourseRoutingModule } from './course-routing.module';
import { CourseServiceModule } from './course-service.module';
import { CourseResolver } from './course.resolver';
import { CourseService } from './course.service';

describe('CourseResolver', () => {
  let courseResolver: CourseResolver;

  const mockedCourse: Course = {
    id: 'course1',
    name: 'Course 1',
    labs: [
      {
        index: 1,
        titles: {
          short: 'Lab 1 Short',
          long: 'Lab 1 Long'
        }
      },
      {
        index: 2,
        titles: {
          short: 'Lab 2 Short',
          long: 'Lab 2 Long'
        }
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
      imports: [CourseRoutingModule, CourseServiceModule, HttpClientTestingModule]
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

    courseResolver = TestBed.inject(CourseResolver);
  });

  it('should fetch the appropriate Course model based on the courseId route parameter', done => {
    const result = courseResolver.resolve(activatedRouteSnapshot);
    result.subscribe((course: Course) => {
      expect(course).toEqual(mockedCourse);
      done();
    });
  });
});
