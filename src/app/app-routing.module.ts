import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: HomeComponent
}, {
  path: 'courses/:courseId',
  children: [{
    path: '',
    loadChildren: () => import('./course/course.module').then(m => m.CourseModule)
  }, {
    path: 'labs/:labIndex',
    loadChildren: () => import('./lab/lab.module').then(m => m.LabModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
