import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TogetherInputSamplesRoutingModule } from './together-input-samples-routing.module';
import { TogetherInputSamplesComponent } from './together-input-samples/together-input-samples.component';
import { NgxTogetherInputModule } from 'ngxTogetherInput';
import { NgxTogetherLabelModule } from 'ngx-together-label';


@NgModule({
  declarations: [
    TogetherInputSamplesComponent
  ],
  imports: [
    CommonModule,
    TogetherInputSamplesRoutingModule,
    NgxTogetherInputModule,
    ReactiveFormsModule,
    FormsModule,
    NgxTogetherLabelModule
  ]
})
export class TogetherInputSamplesModule { }
