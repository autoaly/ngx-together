import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogetherInputSamplesComponent } from './together-input-samples.component';

describe('TogetherInputSamplesComponent', () => {
  let component: TogetherInputSamplesComponent;
  let fixture: ComponentFixture<TogetherInputSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogetherInputSamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogetherInputSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
