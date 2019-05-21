import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabComponent } from './lab/lab.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { LabRoutingModule } from './lab-routing.module';
import { LabMaterialModule } from './lab-material.module';
import { LabService } from './lab.service';

@NgModule({
  declarations: [LabComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    }),
    LabRoutingModule,
    LabMaterialModule
  ],
  providers: [LabService]
})
export class LabModule { }
