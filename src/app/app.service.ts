import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { METADATA_FILENAME } from './constants/app.constants';
import { Metadata } from './model/metadata';
import { Course } from './model/course';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly courseCache$: Observable<Course[]> = this.httpClient.get<Metadata>(`./assets/${METADATA_FILENAME}`).pipe(
    map(metadata => metadata.courses),
    shareReplay(1)
  );

  constructor(private readonly httpClient: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.courseCache$;
  }

}
