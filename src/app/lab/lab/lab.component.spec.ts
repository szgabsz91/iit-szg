import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LabComponent } from './lab.component';
import { MarkdownComponent, MarkdownModule, MarkdownService } from 'ngx-markdown';
import { LabMaterialModule } from '../lab-material.module';
import { CourseServiceModule } from 'src/app/course/course-service.module';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Lab } from '../../model/lab';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('LabComponent', () => {

  let fixture: ComponentFixture<LabComponent>;
  let labComponent: LabComponent;
  let markdownService: MarkdownService;
  let compiled: HTMLElement;

  const mockedLab: Lab = {
    courseId: 'course1',
    index: 2,
    titles: {
      short: 'Lab 2 Short',
      long: 'Lab 2 Long'
    }
  };
  const activatedRoute = {
    data: of({
      lab: mockedLab
    })
  };
  const prettyPrintSpy = jasmine.createSpy('prettyPrint');

  beforeEach(() => {
    (window as any).prettyPrint = prettyPrintSpy;
  });

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
        MarkdownService,
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

    markdownService = TestBed.inject(MarkdownService);
    spyOn(markdownService, 'getSource').and.returnValue(of('Markdown content'));

    labComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  describe('component', () => {

    it('should download the appropriate Markdown file', () => {
      const markdownUrl = `./assets/courses/${mockedLab.courseId}/lab${mockedLab.index.toString().padStart(2, '0')}.md`;
      expect(markdownService.getSource).toHaveBeenCalledOnceWith(markdownUrl);
    });

    describe('properties', () => {

      it('should contain the appropriate lab', () => {
        labComponent.lab$.subscribe(lab => {
          expect(lab).toEqual(mockedLab);
        });
      });

    });

    describe('when the ready event is dispatched', () => {

      beforeEach(() => {
        prettyPrintSpy.calls.reset();
        const markdownComponent: MarkdownComponent = fixture.debugElement.query(By.directive(MarkdownComponent)).componentInstance;
        markdownComponent.ready.emit();
      });

      it('should invoke window.prettyPrint', () => {
        expect(prettyPrintSpy).toHaveBeenCalledTimes(1);
      });

    });

  });

  describe('template', () => {

    it('should render the appropriate lab title', () => {
      const title = compiled.querySelector('mat-card-title').textContent;
      expect(title).toEqual(`Lab ${mockedLab.index}: ${mockedLab.titles.long}`);
    });

    it('should render the appropriate lab markdown content', () => {
      const markdownContentLength = compiled.querySelectorAll('markdown *').length;
      expect(markdownContentLength).toBeGreaterThan(0);
    });

  });

});
