import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
export class LabComponent implements OnInit {

  lab$: Observable<Lab>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.lab$ = this.activatedRoute.data.pipe(
      map((data: Data) => data.lab)
    );
  }

}
