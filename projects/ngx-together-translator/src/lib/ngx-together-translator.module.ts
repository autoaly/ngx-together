import { NgModule } from '@angular/core';
import { LanguageFile } from './files/language';
import { NgxTogetherLanguageTranslatorPipe } from './ngx-together-language-translator.pipe';
import { NgxTogetherTranslatorComponent } from './ngx-together-translator.component';
import { LANGUAGE_TRANSLATOR, NgxTogetherTranslatorService } from './ngx-together-translator.service';



@NgModule({
  declarations: [
    NgxTogetherTranslatorComponent,
    NgxTogetherLanguageTranslatorPipe
  ],
  imports: [
  ],
  exports: [
    NgxTogetherTranslatorComponent,
    NgxTogetherLanguageTranslatorPipe
  ],
  providers: [
    { provide: LANGUAGE_TRANSLATOR, useValue: LanguageFile.language },
    NgxTogetherTranslatorService
  ]
})
export class NgxTogetherTranslatorModule { }
