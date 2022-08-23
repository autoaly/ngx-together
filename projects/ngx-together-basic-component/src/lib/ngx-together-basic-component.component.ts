import { Component, Input, OnInit } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'ngx-together-basic-component',
  template: '',
})
export class NgxTogetherBasicComponentComponent implements OnInit {

  

  @Input()
  label: string = ''

  @Input()
  backgroundIcon!: string;

  @Input()
  controller!: FormControl

  @Input()
  controllerName!: string

  @Input()
  larger = false;

  @Input()
  hasAutoComplete = false;

  @Input()
  inputIsLTR!: boolean;

  @Input()
  showValidationMessage: boolean = false;


  @Input()
  tip: string = ''

  private _disabled!: boolean;

  public get disabled(): any {
      return this._disabled;
  }

  @Input()
  public set disabled(v: any) {
      this._disabled = v;
  }

  constructor() { }

  ngOnInit(): void {
  }

  get isRequired() {
      let controler = this.controller?.validator && this.controller.validator({} as AbstractControl)
      return controler ? controler['required'] : undefined;
  }

  get hasValue() {
      return !!this.controller?.value;
  }

  get isRTL(): boolean {
      const lang = sessionStorage.getItem('languageFlag');
      const result = !lang || lang === 'UAE';
      return result;
  }

  get className(): string {
      let result = '';

      if (!!this.backgroundIcon) {
          result += ' ' + this.backgroundIcon + ' input-bg-right-icon';
      }

      return result;
  }
  getControlName(): string {
      if (!this.controller)
          return '';
      const formGroup = this.controller?.parent?.controls;
      if (!formGroup)
          return '';
      let res = Object.keys(formGroup).find(name => {
          let x = (formGroup as any)[name];
          return this.controller === x
      }) || null;
      return res || ''
  }

}
