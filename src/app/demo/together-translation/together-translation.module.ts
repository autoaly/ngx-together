import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TogetherTranslationRoutingModule } from './together-translation-routing.module';
import { TogetherTranslationComponent } from './together-translation/together-translation.component';
import { LANGUAGE_TRANSLATOR, NgxTogetherLanguageTranslatorPipe, NgxTogetherTranslatorModule } from 'ngx-together-translator';

/**
 * create your local dictionary
 * it could be in a separated file
 * then provide it like below
 */
const LANGUAGE_DICTIONARY = {
  "cancel": { "fa": "لغو", "en": "Cancel" },
  "ok": { "fa": "تایید", "en": "OK" },
  "import": { "fa": "به تو چه", "en": "LANGUAGE_DICTIONARY" },
}

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
    { provide: LANGUAGE_TRANSLATOR, useValue: LANGUAGE_DICTIONARY },
    NgxTogetherLanguageTranslatorPipe

  ]
})
export class TogetherTranslationModule { }
