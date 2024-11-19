import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EffectCleanupRegisterFn,
  effect,
  input,
  signal,
  inject
} from '@angular/core';
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
  imports: [CommonModule, MarkdownModule, MatCardModule, MatProgressSpinnerModule]
})
export class LabComponent {
  private readonly markdownService = inject(MarkdownService);

  lab = input.required<Lab>();
  labContent = signal<string | undefined>(undefined);

  constructor() {
    effect((onCleanup: EffectCleanupRegisterFn) => {
      const subscription = this.markdownService
        .getSource(`./assets/courses/${this.lab().courseId}/lab${this.lab().index.toString().padStart(2, '0')}.md`)
        .subscribe((labContent: string) => this.labContent.set(labContent));

      onCleanup(() => subscription.unsubscribe());
    });
  }

  onMarkdownReady(): void {
    prettyPrint();
  }
}
