import { Routes } from '@angular/router';
import { LabComponent } from './lab/lab.component';
import { resolveLab } from './lab.resolver';
import { LabService } from './lab.service';
import { importProvidersFrom, SecurityContext } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';

export const labRoutes: Routes = [
  {
    path: '',
    component: LabComponent,
    resolve: {
      lab: resolveLab
    },
    providers: [
      LabService,
      importProvidersFrom(
        MarkdownModule.forRoot({
          loader: HttpClient,
          // Note: to keep data attributes for pre[data-label]
          sanitize: SecurityContext.NONE
        })
      )
    ]
  }
];
