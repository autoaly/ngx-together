import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxTogetherButtonModule } from 'ngx-together-button';
import { NgxTogetherLabelModule } from 'ngx-together-label';
import { TogetherButtonSamplesRoutingModule } from './together-button-samples-routing.module';
import { TogetherButtonSamplesComponent } from './together-button-samples/together-button-samples.component';


@NgModule({
  declarations: [
    TogetherButtonSamplesComponent
  ],
  imports: [
    CommonModule,
    TogetherButtonSamplesRoutingModule,
    NgxTogetherButtonModule,
    NgxTogetherLabelModule
  ]
})
export class TogetherButtonSamplesModule { }
