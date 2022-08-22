import { Component } from '@angular/core';
import { Utility } from './utility/utility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  state: 'in' | 'out' = 'in';
  title = 'ngx-together';

  get style() {
    return { direction: `${Utility.isRtl() ? 'rtl' : 'ltr'}` };
  }

}
