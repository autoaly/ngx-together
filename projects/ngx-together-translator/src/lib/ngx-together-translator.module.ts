import { NgModule } from '@angular/core';
import { NgxTogetherLanguageTranslatorPipe } from './ngx-together-language-translator.pipe';
import { NgxTogetherTranslatorComponent } from './ngx-together-translator.component';



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
  ]
})
export class NgxTogetherTranslatorModule { }
