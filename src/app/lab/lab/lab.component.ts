import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { MarkdownService } from 'ngx-markdown';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Lab } from '../../model/lab';

declare function prettyPrint(): void;

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabComponent implements OnInit {
  readonly lab$: Observable<Lab> = this.activatedRoute.data.pipe(map((data: Data) => data.lab));
  labContent$!: Observable<string>;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly markdownService: MarkdownService) {}

  ngOnInit(): void {
    this.labContent$ = this.lab$.pipe(
      map((lab: Lab) => `./assets/courses/${lab.courseId}/lab${lab.index.toString().padStart(2, '0')}.md`),
      switchMap((contentUrl: string) => this.markdownService.getSource(contentUrl))
    );
  }

  onMarkdownReady(): void {
    prettyPrint();
  }
}
