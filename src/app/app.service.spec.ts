import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';

describe('AppService', () => {

  let appService: AppService;
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
    imports: [HttpClientTestingModule]
  }));

  beforeEach(() => {
    appService = TestBed.get(AppService);
    httpClient = TestBed.get(HttpClient);
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

  describe('getCourse', () => {

    it('should return the course with the given id', () => {
      appService.getCourse(mockedCourses[1].id).subscribe(course => {
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

  describe('getLab', () => {

    it('should return the lab with the given index in the course with the given id', () => {
      appService.getLab(mockedCourses[0].id, mockedCourses[0].labs[1].index).subscribe(lab => {
        const mockedLab = {
          ...mockedCourses[0].labs[1],
          courseId: mockedCourses[0].id
        };

        expect(lab).toEqual(mockedLab);
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
