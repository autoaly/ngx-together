import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'ngx-together-together-input-samples',
  templateUrl: './together-input-samples.component.html',
  styleUrls: ['./together-input-samples.component.scss']
})
export class TogetherInputSamplesComponent implements OnInit {
  form !: FormGroup;
  constructor(
    public _fb: FormBuilder
  ) {
    this.form = _fb.group({
      name:['' , [Validators.nullValidator]],
      family:['' , [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  getCtrl(name:string){
    return this.form.controls[name] as FormControl;
  }

}
