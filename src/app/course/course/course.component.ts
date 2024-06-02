import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../model/course';
import { Lab } from '../../model/lab';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatTableModule]
})
export class CourseComponent {
  readonly columns = ['index', 'title'];

  readonly course = input.required<Course>();

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  navigateToLab(lab: Lab) {
    return this.router.navigate(['./labs', lab.index], {
      relativeTo: this.activatedRoute
    });
  }
}
