import { Component, Input, OnInit } from '@angular/core';
import { finalize, Observable } from 'rxjs';

@Component({
  selector: 'ngx-together-button',
  templateUrl:'./ngx-together-button.component.html',
  styles: [
  ]
})
export class NgxTogetherButtonComponent implements OnInit {


  @Input()
  className = 'btn btn-block btn-primary '

  @Input() public action: (() => Observable<any>) | undefined;

  @Input()
  label = "label"

  @Input() public customColor!: string;

  @Input() public disabled = false;

  public finalizeWait = () => {
    this.isWait = false
  };

  public isWait = false;

  constructor() { }

  ngOnInit(): void {
  }


  click = () => {
    if (this.isWait || !this.action || this.disabled) {
      return;
    }

    this.isWait = true;
    this.action()
      .pipe(
        finalize(
          () => { this.finalizeWait() }
        )
      )
      .subscribe();
  }


}
