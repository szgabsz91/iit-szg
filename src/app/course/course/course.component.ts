import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Course } from '../../model/course';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lab } from '../../model/lab';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  course$: Observable<Course>;
  columns = ['index', 'title'];

  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.course$ = this.route.paramMap
      .pipe(switchMap(params => {
        const courseId = params.get('courseId');
        return this.courseService.getCourse(courseId);
      }));
  }

  navigateToLab(lab: Lab) {
    return this.router.navigate(['./labs', lab.index], { relativeTo: this.route });
  }

}
