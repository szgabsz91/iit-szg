import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { Lab } from '../model/lab';
import { LabService } from './lab.service';

export const resolveLab: ResolveFn<Lab> = (activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Lab> => {
  const labService = inject(LabService);
  const courseId = activatedRouteSnapshot.paramMap.get('courseId');
  const labIndex = +activatedRouteSnapshot.paramMap.get('labIndex');
  return labService.getLab(courseId, labIndex);
};
