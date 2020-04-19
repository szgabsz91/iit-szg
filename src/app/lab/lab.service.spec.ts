import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LabService } from './lab.service';
import { CourseServiceModule } from '../course/course-service.module';
import { Course } from '../model/course';
import { Lab } from '../model/lab';

describe('LabService', () => {

  let labService: LabService;
  let httpTestingController: HttpTestingController;

  const mockedCourses: Course[] = [{
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
    imports: [
      HttpClientTestingModule,
      CourseServiceModule
    ],
    providers: [LabService]
  }));

  beforeEach(() => {
    labService = TestBed.inject(LabService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getLab', () => {

    it('should return the lab with the given index in the course with the given id', () => {
      labService.getLab(mockedCourses[0].id, mockedCourses[0].labs[1].index).subscribe(lab => {
        const mockedLab: Lab = {
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
    });

  });

});
