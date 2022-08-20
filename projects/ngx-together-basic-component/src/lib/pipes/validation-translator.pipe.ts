import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'validation'
})
export class ValidationTranslatorPipe implements PipeTransform {

  transform(value: ValidationErrors | null | undefined): string {
    if (value && value['negativeNumber'])
      return 'you cant insert negative numbers';
    if (value && value['engCharOnly'])
      return 'you have to insert only English characters';
    if (value && value['nameNotValidEnName'])
      return 'not valid English name';
    if (value && value['onlyNumbers'])
      return 'you have to insert only numbers';
    if (value && value['futureDate'])
      return 'you have to select future date';
    if (value && value['pastDate'])
      return 'you have to select past date';
    if (value && value['pattern'])
      return 'inserted value does not match to pattern';
    if (value && value['required'])
      return 'this field is required';
    if (value && value['forbiddenNames'])
      return 'you have to select item from list';
    if (value && value['noItemToSelect'])
      return 'there is no item in list to select';
    if (value && value['max'])
      return `maximum value is ${value['max']['max']}`;
    if (value && value['maxlength'])
      return `maximum length is ${value['maxlength']['requiredLength']}`;
    if (value && value['min'])
      return `minimum value is ${value['min']['min']}`;
    if (value && value['minlength'])
      return `minimum length is ${value['minlength']['requiredLength']}`;
    return '';
  }

}
