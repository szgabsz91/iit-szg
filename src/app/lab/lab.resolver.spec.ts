import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { Lab } from '../model/lab';
import { LabService } from './lab.service';
import { resolveLab } from './lab.resolver';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('resolveLab', () => {
  const mockedLab: Lab = {
    courseId: 'course1',
    index: 2,
    titles: {
      short: 'Lab 2 Short',
      long: 'Lab 2 Long'
    },
    description: 'Lab 2 Description',
    keywords: ['Lab 2 Keyword']
  };
  const activatedRouteSnapshot: ActivatedRouteSnapshot = {
    paramMap: {
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
    }
  } as any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LabService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        provideExperimentalZonelessChangeDetection()
      ]
    });
  });

  beforeEach(() => {
    const labService = TestBed.inject(LabService);
    spyOn(labService, 'getLab').and.callFake((...args) => {
      const courseId = args[0];
      const labIndex = args[1];

      if (courseId === mockedLab.courseId && labIndex === mockedLab.index) {
        return of(mockedLab);
      }

      return EMPTY;
    });
  });

  it('should fetch the appropriate Lab model based on the courseId and labIndex route parameters', done => {
    TestBed.runInInjectionContext(() => {
      const result = resolveLab(activatedRouteSnapshot, undefined) as Observable<Lab>;
      result.subscribe((lab: Lab) => {
        expect(lab).toEqual(mockedLab);
        done();
      });
    });
  });
});
