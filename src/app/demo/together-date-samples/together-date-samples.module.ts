import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TogetherDateSamplesRoutingModule } from './together-date-samples-routing.module';
import { TogetherDateSamplesComponent } from './together-date-samples/together-date-samples.component';

import { NgxTogetherLabelModule } from 'ngx-together-label';
import { NgxTogetherDateModule } from 'ngx-together-date';


@NgModule({
  declarations: [
    TogetherDateSamplesComponent
  ],
  imports: [
    CommonModule,
    TogetherDateSamplesRoutingModule,
    ReactiveFormsModule,
    NgxTogetherDateModule,
    NgxTogetherLabelModule
  ]
})
export class TogetherDateSamplesModule { }
