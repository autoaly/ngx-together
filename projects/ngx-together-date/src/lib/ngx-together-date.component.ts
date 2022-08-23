import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Component, Input, OnInit } from '@angular/core';
import { NgxTogetherBasicComponentComponent } from 'ngxTogetherBasicComponent';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
@Component({
  selector: 'ngx-together-date',
  templateUrl: './ngx-together-date.component.html',
  styleUrls: ['./ngx-together-date.component.scss'],
  providers: [
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ]

})
export class NgxTogetherDateComponent extends NgxTogetherBasicComponentComponent implements OnInit {

  @Input()
  style!: any;

  @Input()
  placeholder = '';

  @Input()
  appearance: MatFormFieldAppearance = 'outline'

  @Input()
  iconClassName!: any;

  @Input()
  minDate!: any;

  @Input()
  maxDate!: any;

  constructor() {
    super();
  }

  override ngOnInit(): void {
  }


}