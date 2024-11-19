import { Injectable, inject } from '@angular/core';
import { AppService } from '../services/app/app.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly appService = inject(AppService);

  getCourse(courseId: string): Observable<Course> {
    return this.appService.getCourses().pipe(map(courses => courses.find(course => course.id === courseId)));
  }
}
