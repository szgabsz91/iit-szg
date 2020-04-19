import { ChangeDetectionStrategy, Component } from '@angular/core';
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
export class CourseComponent {

  readonly columns = ['index', 'title'];
  readonly course$: Observable<Course> = this.activatedRoute.data.pipe(
    map((data: Data) => data.course)
  );

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router) {}

  navigateToLab(lab: Lab) {
    return this.router.navigate(['./labs', lab.index], { relativeTo: this.activatedRoute });
  }

}
