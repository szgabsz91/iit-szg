import { Injectable } from '@angular/core';
import { AppService } from '../services/app/app.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private readonly appService: AppService) {}

  getCourse(courseId: string): Observable<Course> {
    return this.appService.getCourses().pipe(map(courses => courses.find(course => course.id === courseId)));
  }
}
