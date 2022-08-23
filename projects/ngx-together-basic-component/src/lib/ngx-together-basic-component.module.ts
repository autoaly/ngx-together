import { NgModule } from '@angular/core';
import { NgxTogetherBasicComponentComponent } from './ngx-together-basic-component.component';
import { ValidationTranslatorPipe } from './pipes/validation-translator.pipe';



@NgModule({
  declarations: [
    NgxTogetherBasicComponentComponent,
    ValidationTranslatorPipe
  ],
  imports: [
  ],
  exports: [
    NgxTogetherBasicComponentComponent,
    ValidationTranslatorPipe
  ],
  
})
export class NgxTogetherBasicComponentModule { }
