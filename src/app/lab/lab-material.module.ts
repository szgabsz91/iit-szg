import { NgModule } from '@angular/core';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';

@NgModule({
  imports: [MatCardModule, MatProgressSpinnerModule],
  exports: [MatCardModule, MatProgressSpinnerModule]
})
export class LabMaterialModule {}
