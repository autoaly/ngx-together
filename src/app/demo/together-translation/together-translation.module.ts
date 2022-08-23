import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TogetherTranslationRoutingModule } from './together-translation-routing.module';
import { TogetherTranslationComponent } from './together-translation/together-translation.component';
import { LANGUAGE_TRANSLATOR, NgxTogetherLanguageTranslatorPipe, NgxTogetherTranslatorModule } from 'ngx-together-translator';
import { NgxTogetherLabelModule } from 'ngx-together-label';

/**
 * create your local dictionary
 * it could be in a separated file
 * then provide it like below
 */
const LANGUAGE_DICTIONARY = {
  "its a simple key": { "fa": "شما میتونید از این ابزار برای ترجمه سایت و کامپوننت های ساخته شده با ngx-together استفاده کنید.", "en": "you can use languageTranslatorPipe to translate text and components which is created by ngx-together." },
  "for test change language from top nav": { "fa": "برای امتحان از نوار بالا زبان را تغییر دهید", "en": "for test change language from top nav" },
  "enjoy this tool": { "fa": "امیدوارم حالشو ببرید", "en": "I hope you enjoy this tool" },
  
}

@NgModule({
  declarations: [
    TogetherTranslationComponent
  ],
  imports: [
    CommonModule,
    TogetherTranslationRoutingModule,
    NgxTogetherTranslatorModule,
    NgxTogetherLabelModule
  ],
  providers: [
    { provide: LANGUAGE_TRANSLATOR, useValue: LANGUAGE_DICTIONARY },
    NgxTogetherLanguageTranslatorPipe

  ]
})
export class TogetherTranslationModule { }
