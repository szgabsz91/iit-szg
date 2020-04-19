import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Lab } from '../../model/lab';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabComponent {

  readonly lab$: Observable<Lab> = this.activatedRoute.data.pipe(
    map((data: Data) => data.lab)
  );

  constructor(private readonly activatedRoute: ActivatedRoute) {}

}
