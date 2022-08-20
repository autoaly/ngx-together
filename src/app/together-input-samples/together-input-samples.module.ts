import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TogetherInputSamplesRoutingModule } from './together-input-samples-routing.module';
import { TogetherInputSamplesComponent } from './together-input-samples/together-input-samples.component';


@NgModule({
  declarations: [
    TogetherInputSamplesComponent
  ],
  imports: [
    CommonModule,
    TogetherInputSamplesRoutingModule
  ]
})
export class TogetherInputSamplesModule { }
