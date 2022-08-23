import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTogetherDateComponent } from './ngx-together-date.component';

describe('NgxTogetherDateComponent', () => {
  let component: NgxTogetherDateComponent;
  let fixture: ComponentFixture<NgxTogetherDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTogetherDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTogetherDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
