import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavbarmenuComponent } from './mindx-side-navbarmenu.component';

describe('SideNavbarmenuComponent', () => {
  let component: SideNavbarmenuComponent;
  let fixture: ComponentFixture<SideNavbarmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavbarmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavbarmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
