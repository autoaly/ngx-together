import { Inject, InjectionToken, Pipe, PipeTransform } from '@angular/core';
import { LanguageFile } from './files/language';
import { LANGUAGE_TRANSLATOR } from './ngx-together-translator.service';



@Pipe({
  name: 'lang'
})
export class NgxTogetherLanguageTranslatorPipe implements PipeTransform {


  constructor(@Inject(LANGUAGE_TRANSLATOR) private language?: any) {
    if (!language)
      language = LanguageFile.language;
  }
  transform(value: string, falg = "fa"): string {
    if (typeof (value) != typeof ('x1'))
      return value;
    let key = value ? value.toLowerCase() : value;
    if (sessionStorage.getItem('languageFlag'))
      falg = sessionStorage.getItem('languageFlag') || falg;
    if (window && falg == "fa")
      return this.language[key] ? (this.language[key].fa || value) : value;
    else
      return this.language[key] ? (this.language[key].en || value) : value;
  }

}
