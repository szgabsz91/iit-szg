import { ChangeDetectionStrategy, Component, input, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../model/course';
import { Lab } from '../../model/lab';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatTableModule]
})
export class CourseComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly columns = ['index', 'title'];

  readonly course = input.required<Course>();

  navigateToLab(lab: Lab) {
    return this.router.navigate(['./labs', lab.index], {
      relativeTo: this.activatedRoute
    });
  }
}
