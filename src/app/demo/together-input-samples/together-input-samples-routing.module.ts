import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TogetherInputSamplesComponent } from './together-input-samples/together-input-samples.component';

const routes: Routes = [
  {
    path:'',
    title : 'Input Samples',
    component:TogetherInputSamplesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TogetherInputSamplesRoutingModule { }
