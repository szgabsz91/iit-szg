import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { Observable, of } from 'rxjs';
import { Lab } from '../../model/lab';

declare function prettyPrint(): void;

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrl: './lab.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MarkdownModule, MatCardModule, MatProgressSpinnerModule]
})
export class LabComponent {
  labContent$: Observable<string> = of('');

  private _lab!: Lab;
  get lab(): Lab {
    return this._lab;
  }
  @Input({ required: true })
  set lab(lab: Lab) {
    this._lab = lab;
    this.labContent$ = this.markdownService.getSource(
      `./assets/courses/${lab.courseId}/lab${lab.index.toString().padStart(2, '0')}.md`
    );
  }

  constructor(private readonly markdownService: MarkdownService) {}

  onMarkdownReady(): void {
    prettyPrint();
  }
}
