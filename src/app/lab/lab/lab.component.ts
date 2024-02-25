import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
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
  lab = input.required<Lab>();
  labContent = computed(() =>
    this.markdownService.getSource(
      `./assets/courses/${this.lab().courseId}/lab${this.lab().index.toString().padStart(2, '0')}.md`
    )
  );

  constructor(private readonly markdownService: MarkdownService) {}

  onMarkdownReady(): void {
    prettyPrint();
  }
}
