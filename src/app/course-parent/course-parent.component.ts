import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-course-parent',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseParentComponent { }
