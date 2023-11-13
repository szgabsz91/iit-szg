import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Lab } from '../model/lab';
import { LabService } from './lab.service';

@Injectable()
export class LabResolver {
  constructor(private readonly labService: LabService) {}

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Lab> {
    const courseId = activatedRouteSnapshot.paramMap.get('courseId');
    const labIndex = +activatedRouteSnapshot.paramMap.get('labIndex');
    return this.labService.getLab(courseId, labIndex);
  }
}
