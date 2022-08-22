import { NgModule } from '@angular/core';
import { NgxTogetherInputComponent } from './ngx-together-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxTogetherLabelModule } from 'ngx-together-label';
import { NgxTogetherLanguageTranslatorPipe, NgxTogetherTranslatorModule } from 'ngx-together-translator';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { NgxTogetherBasicComponentModule, ValidationTranslatorPipe } from 'ngxTogetherBasicComponent';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [
    NgxTogetherInputComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    NgxTogetherLabelModule,
    NgxTogetherTranslatorModule,
    NgxMaskModule.forRoot(maskConfig),
    ReactiveFormsModule,
    NgxTogetherBasicComponentModule,
    CommonModule
  ],
  exports: [
    NgxTogetherInputComponent
  ],
  providers: [
    NgxTogetherLanguageTranslatorPipe,
    ValidationTranslatorPipe,
  ]
})
export class NgxTogetherInputModule { }
