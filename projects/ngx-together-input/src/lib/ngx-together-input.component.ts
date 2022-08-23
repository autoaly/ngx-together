import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { NgxTogetherBasicComponentComponent } from 'ngxTogetherBasicComponent';

@Component({
  selector: 'ngx-together-input',
  templateUrl: './ngx-together-input.component.html',
  styleUrls: ['./ngx-together-input.component.scss']
})
export class NgxTogetherInputComponent extends NgxTogetherBasicComponentComponent implements OnInit {
  @Output() blur: EventEmitter<any> = new EventEmitter<any>();
  @Input() iconClassName = '';

  @Input()
  type: 'text' | 'number' | 'email' | 'tel' | 'password' = 'text'

  @Input()
  placeholder = '';


  @Input()
  hintLabel = '';

  @Input()
  mask!: string;

  @Input()
  patterns: string | null = '/[^]*/';

  @Input()
  min!: string;

  @Input()
  max!: string;

  @Input()
  prefix !: string;

  @Input()
  placeHolderCharacter !: string;

  @Input()
  fieldDesignType!: string;

  @Input()
  appearance: MatFormFieldAppearance = 'outline'

  customPatterns: any;
  constructor() {
    super();
    if (this.type != 'text') {
      this.mask = '';
      this.patterns = null;
    }
    if (this.patterns && this.patterns != '/[^]*/')
      this.customPatterns = {
        '0': { pattern: new RegExp(this.patterns) }
      };
  }

  override ngOnInit(): void {

  }

  onBlur($event: any) {
    this.blur.emit($event);
  }

  get emailError() {
    let e = this.controller?.errors;
    return e ? e['email'] : '';
  }

  get maxLengthError() {
    let e = this.controller?.errors;
    return e ? e['maxlength'] : '';
  }
  get minLengthError() {
    let e = this.controller?.errors;
    return e ? e['minlength'] : '';
  }
  get invalidError() {
    let e = this.controller?.errors;
    return e ? Object.keys(e)[0] : "";
  }
}

