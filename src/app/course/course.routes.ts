import { Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CourseResolver } from './course.resolver';

export const courseRoutes: Routes = [
  {
    path: '',
    component: CourseComponent,
    resolve: {
      course: CourseResolver
    },
    providers: [CourseResolver]
  }
];
