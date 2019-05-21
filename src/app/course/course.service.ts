import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../model/course';

@Injectable()
export class CourseService {

  constructor(private appService: AppService) { }

  getCourse(courseId: string): Observable<Course> {
    return this.appService.getCourses().pipe(
      map(courses => courses.find(course => course.id === courseId))
    );
  }

}
