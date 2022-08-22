import { Injectable, InjectionToken } from '@angular/core';

@Injectable()
export class NgxTogetherTranslatorService {

  constructor() { }
}

export const LANGUAGE_TRANSLATOR = new InjectionToken<any>('language');