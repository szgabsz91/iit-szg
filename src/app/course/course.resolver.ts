import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { CourseService } from './course.service';

export const resolveCourse: ResolveFn<Course> = (
  activatedRouteSnapshot: ActivatedRouteSnapshot
): Observable<Course> => {
  const courseService = inject(CourseService);
  const courseId = activatedRouteSnapshot.paramMap.get('courseId');
  return courseService.getCourse(courseId);
};
