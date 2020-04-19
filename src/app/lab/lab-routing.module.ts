import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabComponent } from './lab/lab.component';
import { LabResolver } from './lab.resolver';

const routes: Routes = [{
  path: '',
  component: LabComponent,
  resolve: {
    lab: LabResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LabResolver]
})
export class LabRoutingModule {}
