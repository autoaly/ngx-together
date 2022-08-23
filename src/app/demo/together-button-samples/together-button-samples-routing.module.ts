import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TogetherButtonSamplesComponent } from './together-button-samples/together-button-samples.component';

const routes: Routes = [
  {
    path: '',
    component: TogetherButtonSamplesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TogetherButtonSamplesRoutingModule { }
