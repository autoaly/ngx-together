import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogetherDateSamplesComponent } from './together-date-samples.component';

describe('TogetherDateSamplesComponent', () => {
  let component: TogetherDateSamplesComponent;
  let fixture: ComponentFixture<TogetherDateSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogetherDateSamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogetherDateSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
