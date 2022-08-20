import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTogetherInputComponent } from './ngx-together-input.component';

describe('NgxTogetherInputComponent', () => {
  let component: NgxTogetherInputComponent;
  let fixture: ComponentFixture<NgxTogetherInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTogetherInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTogetherInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
