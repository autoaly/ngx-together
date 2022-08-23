import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TogetherDateSamplesComponent } from './together-date-samples/together-date-samples.component';

const routes: Routes = [
  {
    path:'',
    component:TogetherDateSamplesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TogetherDateSamplesRoutingModule { }
