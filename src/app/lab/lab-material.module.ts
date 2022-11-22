import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [MatCardModule, MatProgressSpinnerModule],
  exports: [MatCardModule, MatProgressSpinnerModule]
})
export class LabMaterialModule {}
