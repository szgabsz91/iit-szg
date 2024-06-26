import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EffectCleanupRegisterFn, effect, input, signal } from '@angular/core';
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
  labContent = signal<string | undefined>(undefined);

  constructor(private readonly markdownService: MarkdownService) {
    effect(
      (onCleanup: EffectCleanupRegisterFn) => {
        const subscription = this.markdownService
          .getSource(`./assets/courses/${this.lab().courseId}/lab${this.lab().index.toString().padStart(2, '0')}.md`)
          .subscribe((labContent: string) => this.labContent.set(labContent));

        onCleanup(() => subscription.unsubscribe());
      },
      {
        allowSignalWrites: true
      }
    );
  }

  onMarkdownReady(): void {
    prettyPrint();
  }
}
