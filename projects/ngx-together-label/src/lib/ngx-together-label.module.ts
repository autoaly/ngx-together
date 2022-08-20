import { NgModule } from '@angular/core';
import { NgxTogetherTranslatorModule, NgxTogetherLanguageTranslatorPipe } from 'ngx-together-translator';
import { NgxTogetherLabelComponent } from './ngx-together-label.component';



@NgModule({
  declarations: [
    NgxTogetherLabelComponent
  ],
  imports: [
    NgxTogetherTranslatorModule
  ],
  exports: [
    NgxTogetherLabelComponent,
  ],
  providers:[
    NgxTogetherLanguageTranslatorPipe
  ]
})
export class NgxTogetherLabelModule { }
