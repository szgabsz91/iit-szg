import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../../model/course';
import { Lab } from '../../model/lab';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {

  course$: Observable<Course>;
  columns = ['index', 'title'];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.course$ = this.activatedRoute.data.pipe(
      map((data: Data) => data.course)
    );
  }

  navigateToLab(lab: Lab) {
    return this.router.navigate(['./labs', lab.index], { relativeTo: this.activatedRoute });
  }

}
