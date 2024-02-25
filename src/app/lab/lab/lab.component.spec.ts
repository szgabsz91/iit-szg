import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LabComponent } from './lab.component';
import { MarkdownComponent, MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Lab } from '../../model/lab';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { MatCardTitle } from '@angular/material/card';

@Component({
  template: ` <app-lab [lab]="lab" /> `,
  standalone: true,
  imports: [LabComponent]
})
class LabWrapperComponent {
  lab: Lab = {
    courseId: 'course1',
    index: 2,
    titles: {
      short: 'Lab 2 Short',
      long: 'Lab 2 Long'
    },
    description: 'Lab 2 Description',
    keywords: ['Lab 2 Keyword']
  };
}

describe('LabComponent', () => {
  let wrapperFixture: ComponentFixture<LabWrapperComponent>;
  let wrapperComponent: LabWrapperComponent;
  let markdownService: MarkdownService;

  const prettyPrintSpy = jasmine.createSpy('prettyPrint');

  beforeEach(() => {
    (window as any).prettyPrint = prettyPrintSpy;
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        LabWrapperComponent,
        HttpClientTestingModule,
        MarkdownModule.forRoot({
          loader: HttpClient
        })
      ],
      providers: [MarkdownService]
    }).compileComponents();
  }));

  beforeEach(() => {
    wrapperFixture = TestBed.createComponent(LabWrapperComponent);

    markdownService = TestBed.inject(MarkdownService);
    spyOn(markdownService, 'getSource').and.returnValue(of('Markdown content'));

    wrapperComponent = wrapperFixture.debugElement.componentInstance;
    wrapperFixture.detectChanges();
  });

  describe('component', () => {
    it('should download the appropriate Markdown file', () => {
      const lab = wrapperComponent.lab;
      const markdownUrl = `./assets/courses/${lab.courseId}/lab${lab.index.toString().padStart(2, '0')}.md`;
      expect(markdownService.getSource).toHaveBeenCalledOnceWith(markdownUrl);
    });

    describe('when the ready event is dispatched', () => {
      beforeEach(() => {
        prettyPrintSpy.calls.reset();
        const markdownComponent: MarkdownComponent = wrapperFixture.debugElement.query(
          By.directive(MarkdownComponent)
        ).componentInstance;
        markdownComponent.ready.emit();
      });

      it('should invoke window.prettyPrint', () => {
        expect(prettyPrintSpy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('template', () => {
    it('should render the appropriate lab title', () => {
      const title = wrapperFixture.debugElement.query(By.directive(MatCardTitle)).nativeElement.textContent.trim();
      expect(title).toEqual(`Lab ${wrapperComponent.lab.index}: ${wrapperComponent.lab.titles.long}`);
    });

    it('should render the appropriate lab markdown content', (done: Function) => {
      setTimeout(() => {
        const markdownContentLength = wrapperFixture.debugElement
          .query(By.directive(MarkdownComponent))
          .nativeElement.querySelectorAll('*').length;
        expect(markdownContentLength).toBeGreaterThan(0);
        done();
      }, 500);
    });
  });
});
