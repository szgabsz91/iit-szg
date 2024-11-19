import { Injectable, inject } from '@angular/core';
import { CourseService } from '../course/course.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Lab } from '../model/lab';

@Injectable()
export class LabService {
  private readonly courseService = inject(CourseService);

  getLab(courseId: string, labIndex: number): Observable<Lab> {
    return this.courseService.getCourse(courseId).pipe(
      map(course => {
        const lab = course.labs.find(l => l.index === labIndex);
        return {
          ...lab,
          courseId
        };
      })
    );
  }
}
