import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LabComponent } from './lab.component';
import { MarkdownModule } from 'ngx-markdown';
import { LabMaterialModule } from '../lab-material.module';
import { CourseServiceModule } from 'src/app/course/course-service.module';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { LabService } from '../lab.service';
import { Lab } from 'src/app/model/lab';

describe('LabComponent', () => {

  let fixture: ComponentFixture<LabComponent>;
  let labComponent: LabComponent;
  let compiled: HTMLElement;
  let httpTestingController: HttpTestingController;

  const mockedLab: Lab = {
    courseId: 'course1',
    index: 2,
    title: 'Lab 2'
  };
  const activatedRoute = {
    data: of({
      lab: mockedLab
    })
  };

  beforeEach(waitForAsync(() => {
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
          useValue: activatedRoute
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabComponent);
    labComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    const markdownUrl = `./assets/courses/${mockedLab.courseId}/lab${mockedLab.index.toString().padStart(2, '0')}.md`;
    const request = httpTestingController.expectOne(markdownUrl);
    expect(request.request.method).toEqual('GET');
    request.flush('Markdown content');
  });

  afterEach(() => {
    httpTestingController.verify();
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
      expect(title).toEqual(`Labx ${mockedLab.index}: ${mockedLab.title}`);
    });

    it('should render the appropriate lab markdown content', () => {
      const markdownContentLength = compiled.querySelectorAll('markdown *').length;
      expect(markdownContentLength).toBeGreaterThan(0);
    });

  });

});
