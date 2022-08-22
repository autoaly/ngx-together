import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTogetherButtonComponent } from './ngx-together-button.component';

describe('NgxTogetherButtonComponent', () => {
  let component: NgxTogetherButtonComponent;
  let fixture: ComponentFixture<NgxTogetherButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTogetherButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTogetherButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
