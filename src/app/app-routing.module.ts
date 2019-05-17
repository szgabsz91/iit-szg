import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { LabComponent } from './lab/lab.component';
import { CourseParentComponent } from './course-parent/course-parent.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: HomeComponent
}, {
  path: 'courses/:courseId',
  component: CourseParentComponent,
  children: [{
    path: '',
    component: CourseComponent
  }, {
    path: 'labs/:labIndex',
    component: LabComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
