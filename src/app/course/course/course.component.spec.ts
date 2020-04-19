import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseComponent } from './course.component';
import { CourseService } from '../course.service';
import { CourseMaterialModule } from '../course-material.module';
import { CourseServiceModule } from '../course-service.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, EMPTY } from 'rxjs';
import { Course } from 'src/app/model/course';

describe('CourseComponent', () => {

  let fixture: ComponentFixture<CourseComponent>;
  let courseComponent: CourseComponent;
  let compiled: HTMLElement;
  let router: Router;

  const mockedCourse: Course = {
    id: 'course1',
    name: 'Course 1',
    labs: [{
      index: 1,
      title: 'Lab 1'
    }, {
      index: 2,
      title: 'Lab 2'
    }]
  };
  const activatedRoute = {
    data: of({
      course: mockedCourse
    })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        CourseMaterialModule,
        CourseServiceModule
      ],
      providers: [{
        provide: ActivatedRoute,
        useValue: activatedRoute
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const courseService = TestBed.inject(CourseService);
    spyOn(courseService, 'getCourse').and.callFake((...args) => {
      const courseId = args[0];

      if (courseId === mockedCourse.id) {
        return of(mockedCourse);
      }

      return EMPTY;
    });

    fixture = TestBed.createComponent(CourseComponent);
    courseComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    router = TestBed.inject(Router);
  });

  describe('component', () => {

    describe('properties', () => {

      it('should contain the appropriate course', () => {
        courseComponent.course$.subscribe(course => {
          expect(course).toEqual(mockedCourse);
        });
      });

      it('should contain the appropriate columns', () => {
        expect(courseComponent.columns).toEqual(['index', 'title']);
      });

    });

    describe('navigateToLab', () => {

      it('should navigate to the appropriate lab page', () => {
        spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));

        const lab = {
          index: 1,
          title: 'Lab 1'
        };

        courseComponent.navigateToLab(lab);

        expect(router.navigate).toHaveBeenCalledWith(['./labs', lab.index], jasmine.any(Object));
      });

    });

  });

  describe('template', () => {

    it('should render the appropriate course name', () => {
      const courseName = compiled.querySelector('h2').textContent;
      expect(courseName).toEqual(mockedCourse.name);
    });

    it('should render the appropriate labs in a table', () => {
      const labTitles = Array.from(compiled.querySelectorAll('tbody td:last-child'))
        .map(el => el.textContent);
      const expectedLabTitles = mockedCourse.labs.map(lab => lab.title);
      expect(labTitles).toEqual(expectedLabTitles);
    });

  });

});
