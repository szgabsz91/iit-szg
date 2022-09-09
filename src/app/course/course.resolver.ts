import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { CourseService } from './course.service';

@Injectable()
export class CourseResolver implements Resolve<Course> {
  constructor(private readonly courseService: CourseService) {}

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Course> {
    const courseId = activatedRouteSnapshot.paramMap.get('courseId');
    return this.courseService.getCourse(courseId);
  }
}
