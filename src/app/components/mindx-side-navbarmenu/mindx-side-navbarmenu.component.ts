import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SideMenuItems } from 'src/app/models/side-menu.model';
@Component({
  selector: 'app-side-navbarmenu',
  templateUrl: './mindx-side-navbarmenu.component.html',
  styleUrls: ['./mindx-side-navbarmenu.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class SideNavbarmenuComponent implements OnInit {
  @Input() public menuState: 'in' | 'out' = 'in';

  @ViewChild('snav') snav!: MatSidenav;
  mobileQuery!: MediaQueryList;
  fillerNav: SideMenuItems[] = [
      // {
      //   title: 'Translator',
      //   url: '/translator',
      //   icon: 'fa-solid fa-language'
      // },
    {
      title: 'Inputs',
      url: '/inputs',
      icon: 'fa-solid fa-keyboard'
    }];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  private _mobileQueryListener!: () => void;

  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  toggle() {
    this.snav.toggle();
  }

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
