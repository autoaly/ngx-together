import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTogetherLabelComponent } from './ngx-together-label.component';

describe('NgxTogetherLabelComponent', () => {
  let component: NgxTogetherLabelComponent;
  let fixture: ComponentFixture<NgxTogetherLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTogetherLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTogetherLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
