import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LabComponent } from './lab.component';
import { MarkdownModule } from 'ngx-markdown';
import { LabMaterialModule } from '../lab-material.module';
import { CourseServiceModule } from 'src/app/course/course-service.module';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of, EMPTY } from 'rxjs';
import { LabService } from '../lab.service';

describe('LabComponent', () => {

  let fixture: ComponentFixture<LabComponent>;
  let labComponent: LabComponent;
  let compiled: HTMLElement;
  let httpTestingController: HttpTestingController;

  const mockedLab = {
    courseId: 'course1',
    index: 2,
    title: 'Lab 2'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LabComponent],
      imports: [
        HttpClientTestingModule,
        MarkdownModule.forRoot({
          loader: HttpClient
        }),
        LabMaterialModule,
        CourseServiceModule
      ],
      providers: [
        LabService,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (paramName: string) => {
                switch (paramName) {
                  case 'courseId':
                    return mockedLab.courseId;

                  case 'labIndex':
                    return mockedLab.index;

                  default:
                    throw new Error(`Unknown parameter name: ${paramName}`);
                }
              }
            })
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const labService = TestBed.inject(LabService);
    spyOn(labService, 'getLab').and.callFake((...args) => {
      const [courseId, labIndex] = args;

      if (courseId === mockedLab.courseId && labIndex === mockedLab.index) {
        return of(mockedLab);
      }

      return EMPTY;
    });

    fixture = TestBed.createComponent(LabComponent);
    labComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  describe('component', () => {

    describe('properties', () => {

      it('should contain the appropriate lab', () => {
        labComponent.lab$.subscribe(lab => {
          expect(lab).toEqual(mockedLab);
        });
      });

    });

  });

  describe('template', () => {

    it('should render the appropriate lab title', () => {
      const title = compiled.querySelector('mat-card-title').textContent;
      expect(title).toEqual(`Lab ${mockedLab.index}: ${mockedLab.title}`);
    });

    it('should render the appropriate lab markdown content', () => {
      const markdownUrl = `./assets/courses/${mockedLab.courseId}/lab${mockedLab.index.toString().padStart(2, '0')}.md`;
      const request = httpTestingController.expectOne(markdownUrl);
      expect(request.request.method).toEqual('GET');
      request.flush('Markdown content');
      httpTestingController.verify();

      const markdownContentLength = compiled.querySelectorAll('markdown *').length;
      expect(markdownContentLength).toBeGreaterThan(0);
    });

  });

});
