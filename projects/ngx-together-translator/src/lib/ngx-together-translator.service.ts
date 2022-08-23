import { Injectable, InjectionToken } from '@angular/core';
import { LanguageFile } from './files/language';
import { NgxTogetherLanguageTranslatorPipe } from './ngx-together-language-translator.pipe';

@Injectable()
export class NgxTogetherTranslatorService {
  translator = new NgxTogetherLanguageTranslatorPipe(LanguageFile.language);
  constructor() { }

  transform(key: string) {
    return this.translator.transform(key);
  }
}

export const LANGUAGE_TRANSLATOR = new InjectionToken<any>('language');