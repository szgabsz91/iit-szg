import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { CourseService } from './course.service';
import { Course } from '../model/course';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('CourseService', () => {
  let courseService: CourseService;
  let httpTestingController: HttpTestingController;

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

  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [CourseService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
    })
  );

  beforeEach(() => {
    courseService = TestBed.inject(CourseService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getCourse', () => {
    it('should return the course with the given id', () => {
      courseService.getCourse(mockedCourses[1].id).subscribe(course => {
        expect(course).toEqual(mockedCourses[1]);
      });

      const request = httpTestingController.expectOne('./assets/metadata.json');
      expect(request.request.method).toEqual('GET');
      request.flush({
        courses: mockedCourses
      });
    });
  });
});
