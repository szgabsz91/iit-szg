import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AppService } from './app.service';
import { Course } from './model/course';

describe('AppService', () => {

  let appService: AppService;
  let httpTestingController: HttpTestingController;

  const mockedCourses: Course[] = [{
    id: 'course1',
    name: 'Course 1',
    labs: [{
      index: 1,
      titles: {
        short: 'Course 1 Lab 1 Short',
        long: 'Course 1 Lab 1 Long'
      }
    }, {
      index: 2,
      titles: {
        short: 'Course 1 Lab 2 Short',
        long: 'Course 1 Lab 2 Long'
      }
    }]
  }, {
    id: 'course2',
    name: 'Course 2',
    labs: [{
      index: 1,
      titles: {
        short: 'Course 2 Lab 1 Short',
        long: 'Course 2 Lab 1 Long'
      }
    }]
  }];

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  beforeEach(() => {
    appService = TestBed.inject(AppService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getCourses', () => {

    it('should return the courses', () => {
      appService.getCourses().subscribe(courses => {
        expect(courses).toEqual(mockedCourses);
      });

      const request = httpTestingController.expectOne('./assets/metadata.json');
      expect(request.request.method).toEqual('GET');
      request.flush({
        courses: mockedCourses
      });
    });

  });

});
