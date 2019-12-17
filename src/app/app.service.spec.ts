import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AppService } from './app.service';

describe('AppService', () => {

  let appService: AppService;
  let httpTestingController: HttpTestingController;

  const mockedCourses = [{
    id: 'course1',
    name: 'Course 1',
    labs: [{
      index: 1,
      title: 'Course 1 Lab 1'
    }, {
      index: 2,
      title: 'Course 1 Lab 2'
    }]
  }, {
    id: 'course2',
    name: 'Course 2',
    labs: [{
      index: 1,
      title: 'Course 2 Lab 1'
    }]
  }];

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  beforeEach(() => {
    appService = TestBed.get(AppService);
    httpTestingController = TestBed.get(HttpTestingController);
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
      httpTestingController.verify();
    });

  });

});
