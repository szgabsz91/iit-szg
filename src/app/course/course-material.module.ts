import { NgModule } from '@angular/core';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';

@NgModule({
  imports: [MatTableModule],
  exports: [MatTableModule]
})
export class CourseMaterialModule {}
