import { Injectable } from '@angular/core';
import { NgxTogetherLanguageTranslatorPipe } from './ngx-together-language-translator.pipe';

@Injectable({
  providedIn: 'root'
})
export class LanguageTraslatorService {

  langPipe = new NgxTogetherLanguageTranslatorPipe();
  constructor() { }

  public setLanguage(language: 'fa' | 'en'): void {
    sessionStorage.setItem('languageFlag', language);
    location.reload();
  }
  public getLanguage(): 'fa' | 'en' {
    let res: 'fa' | 'en' = sessionStorage.getItem('languageFlag') as any ;
    if (res === undefined || res == null) {
      res = 'en';
      this.setLanguage('en');
    }
    return res || 'fa';
  }

  public translate(value: string) {
    return this.langPipe.transform(value);
  }

}
