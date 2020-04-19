import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CourseResolver } from './course.resolver';

const routes: Routes = [{
  path: '',
  component: CourseComponent,
  resolve: {
    course: CourseResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CourseResolver]
})
export class CourseRoutingModule {}
