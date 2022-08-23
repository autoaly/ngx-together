import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxTogetherButtonComponent } from './ngx-together-button.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxTogetherLanguageTranslatorPipe, NgxTogetherTranslatorModule } from 'ngx-together-translator';


@NgModule({
  declarations: [
    NgxTogetherButtonComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    NgxTogetherTranslatorModule
  ],
  exports: [
    NgxTogetherButtonComponent,
  ],
  providers:[
    NgxTogetherLanguageTranslatorPipe
  ]
})
export class NgxTogetherButtonModule { }
