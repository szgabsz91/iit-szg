import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { CourseRoutingModule } from './course-routing.module';
import { CourseMaterialModule } from './course-material.module';
import { CourseServiceModule } from './course-service.module';

@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    CourseMaterialModule,
    CourseServiceModule
  ]
})
export class CourseModule { }
