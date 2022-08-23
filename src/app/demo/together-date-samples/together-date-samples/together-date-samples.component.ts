import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-together-together-date-samples',
  templateUrl: './together-date-samples.component.html',
  styleUrls: ['./together-date-samples.component.scss']
})
export class TogetherDateSamplesComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private _fb: FormBuilder
  ) {
    this.form = _fb.group({
      date: ['', [Validators.nullValidator]],
      required: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  getCtrl(name: string): FormControl {
    return this.form.controls[name] as FormControl;
  }
}
