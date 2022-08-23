import { AfterViewInit, Component } from '@angular/core';
import { Utility } from './utility/utility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  state: 'in' | 'out' = 'in';
  title = 'ngx-together';

  get style() {
    return { direction: `${Utility.isRtl() ? 'rtl' : 'ltr'}` };
  }
  ngAfterViewInit(): void {
    if (Utility.isRtl()) {
      document.getElementsByTagName('html')[0].setAttribute('lang', 'fa');
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
    }
    else {
      document.getElementsByTagName('html')[0].setAttribute('lang', 'en');
      document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
    }
  }
  isRtl(){
    return Utility.isRtl()
  }

}
