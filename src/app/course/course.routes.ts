import { Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { resolveCourse } from './course.resolver';

export const courseRoutes: Routes = [
  {
    path: '',
    component: CourseComponent,
    resolve: {
      course: resolveCourse
    }
  }
];
