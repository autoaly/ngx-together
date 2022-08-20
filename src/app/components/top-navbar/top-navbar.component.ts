import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LanguageTraslatorService } from 'ngx-together-translator';

@Component({
  selector: 'ngx-together-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent  implements OnInit {
  @Input() state: 'in' | 'out' = 'in';
  @Output() stateChange = new EventEmitter();

  profile: any = {};

  activeMenu: 'home' | 'runMode' | 'designMode' = 'home';

  public engSrc = 'assets/flags/uk.svg';
  public faSrc = 'assets/flags/ir.svg';
  public logoSrc = 'assets/logo/logo.svg';
  public selectedLngSrc!: string;

  constructor(
    public langService: LanguageTraslatorService,
    ) {
    this.setSelectedLanguage(langService);
  }

  private setSelectedLanguage(langService: LanguageTraslatorService) {
    if (langService.getLanguage() == 'fa') {
      this.selectedLngSrc = this.faSrc;
    }

    else {
      this.selectedLngSrc = this.engSrc;
    }
  }

  ngOnInit(): void {
    this.getUserProfile() ;
  }

  ngAfterViewInit(): void {
  }

  private getUserProfile() {
    this.profile = {
      email:'ali.autoaly@gmail.com'
    }
    
  }

  setLanguage(flag: 'en' | 'fa') {
    this.langService.setLanguage(flag);

  }
  clickOnToggle() {
    this.state = (this.state == 'out' ? 'in' : 'out');
    this.stateChange.emit(this.state);
  }

  logout(){
    
  }
  
}
