import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TogetherTranslationRoutingModule } from './together-translation-routing.module';
import { TogetherTranslationComponent } from './together-translation/together-translation.component';
import { NgxTogetherLanguageTranslatorPipe, NgxTogetherTranslatorModule } from 'ngx-together-translator';
import { LanguageFile } from './custom.language';


@NgModule({
  declarations: [
    TogetherTranslationComponent
  ],
  imports: [
    CommonModule,
    TogetherTranslationRoutingModule,
    NgxTogetherTranslatorModule
  ],
  providers: [
    
       NgxTogetherLanguageTranslatorPipe
    
  ]
})
export class TogetherTranslationModule { }
