import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-together-label',
  template: `
    <span >
    {{label | lang}}
</span>

  `,
  styles: [
  ]
})
export class NgxTogetherLabelComponent implements OnInit {

  @Input() public label!: string;
  constructor() {

  }

  ngOnInit(): void {
  }

}
