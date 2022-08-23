import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { NgxTogetherTranslatorService } from 'ngx-together-translator';

@Pipe({
  name: 'validation'
})
export class ValidationTranslatorPipe implements PipeTransform {
  constructor(private translator : NgxTogetherTranslatorService){

  }
  transform(value: ValidationErrors | null | undefined): string {
    if (value && value['negativeNumber'])
      return this.translator.transform('you cant insert negative numbers');
    if (value && value['engCharOnly'])
      return this.translator.transform('you have to insert only English characters');
    if (value && value['nameNotValidEnName'])
      return this.translator.transform('not valid English name');
    if (value && value['onlyNumbers'])
      return this.translator.transform('you have to insert only numbers');
    if (value && value['futureDate'])
      return this.translator.transform('you have to select future date');
    if (value && value['pastDate'])
      return this.translator.transform('you have to select past date');
    if (value && value['pattern'])
      return 'inserted value does not match to pattern';
    if (value && value['required'])
      return this.translator.transform('this field is required');
    if (value && value['forbiddenNames'])
      return this.translator.transform('you have to select item from list');
    if (value && value['noItemToSelect'])
      return this.translator.transform('there is no item in list to select');
    if (value && value['max'])
      return this.translator.transform(`maximum value is ${value['max']['max']}`);
    if (value && value['maxlength'])
      return this.translator.transform(`maximum length is ${value['maxlength']['requiredLength']}`);
    if (value && value['min'])
      return this.translator.transform(`minimum value is ${value['min']['min']}`);
    if (value && value['minlength'])
      return this.translator.transform(`minimum length is ${value['minlength']['requiredLength']}`);
    return '';
  }

}
