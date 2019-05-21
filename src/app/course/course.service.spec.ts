import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CourseService } from './course.service';
import { HttpClient } from '@angular/common/http';

describe('CourseService', () => {

  let courseService: CourseService;
  let httpClient: HttpClient;
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
    imports: [HttpClientTestingModule],
    providers: [CourseService]
  }));

  beforeEach(() => {
    courseService = TestBed.get(CourseService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
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
      httpTestingController.verify();
    });

  });

});
