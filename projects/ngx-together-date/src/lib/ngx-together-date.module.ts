import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxTogetherTranslatorModule, NgxTogetherLanguageTranslatorPipe } from 'ngx-together-translator';
import { NgModule } from '@angular/core';
import { NgxTogetherDateComponent } from './ngx-together-date.component';

import { NgxTogetherBasicComponentModule, ValidationTranslatorPipe } from 'ngxTogetherBasicComponent';
import { NgxTogetherLabelModule } from 'ngx-together-label';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    NgxTogetherDateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxTogetherTranslatorModule,
    NgxTogetherBasicComponentModule,
    NgxTogetherLabelModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule
  ],
  exports: [
    NgxTogetherDateComponent,
  ],
  providers: [
    ValidationTranslatorPipe,
    NgxTogetherLanguageTranslatorPipe,    
  ],
})
export class NgxTogetherDateModule { }
