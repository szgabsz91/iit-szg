import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Metadata } from './model/metadata';
import { Course } from './model/course';
import { Lab } from './model/lab';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Metadata>('./assets/metadata.json')
      .pipe(map(metadata => metadata.courses));
  }

  getCourse(courseId: string): Observable<Course> {
    return this.getCourses()
      .pipe(map(courses => courses.find(course => course.id === courseId)));
  }

  getLab(courseId: string, labIndex: number): Observable<Lab> {
    return this.getCourse(courseId)
      .pipe(map(course => {
        const lab = course.labs.find(l => l.index === labIndex);
        return {
          ...lab,
          courseId
        };
      }));
  }

}
