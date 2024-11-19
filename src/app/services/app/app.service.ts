import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { METADATA_FILENAME } from '../../constants/app.constants';
import { Metadata } from '../../model/metadata';
import { Course } from '../../model/course';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly httpClient = inject(HttpClient);

  private readonly courseCache$: Observable<readonly Course[]>;

  constructor() {
    this.courseCache$ = this.httpClient.get<Metadata>(`./assets/${METADATA_FILENAME}`).pipe(
      map(metadata => metadata.courses),
      shareReplay(1)
    );
  }

  getCourses(): Observable<readonly Course[]> {
    return this.courseCache$;
  }
}
