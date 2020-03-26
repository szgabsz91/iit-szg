import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Metadata } from './model/metadata';
import { Course } from './model/course';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private courseCache$: Observable<Course[]>;

  constructor(private httpClient: HttpClient) { }

  getCourses(): Observable<Course[]> {
    // istanbul ignore else
    if (!this.courseCache$) {
      this.courseCache$ = this.httpClient.get<Metadata>('./assets/metadata.json').pipe(
        map(metadata => metadata.courses),
        shareReplay(1)
      );
    }

    return this.courseCache$;
  }

}
