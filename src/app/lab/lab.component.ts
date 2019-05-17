import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Lab } from '../model/lab';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})
export class LabComponent implements OnInit {

  lab$: Observable<Lab>;

  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.lab$ = this.route.paramMap
      .pipe(switchMap(params => {
        const courseId = params.get('courseId');
        const labIndex = +params.get('labIndex');
        return this.appService.getLab(courseId, labIndex);
      }));
  }

}
