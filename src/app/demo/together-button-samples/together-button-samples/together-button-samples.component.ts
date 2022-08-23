import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { delay, timeout } from 'rxjs/operators';

@Component({
  selector: 'ngx-together-together-button-samples',
  templateUrl: './together-button-samples.component.html',
  styleUrls: ['./together-button-samples.component.scss']
})
export class TogetherButtonSamplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * you have to use arrow function
   */
  testMe = (): Observable<any> => {
    return of(console.log('test button spinner')).pipe(delay(3000));
  }
}
