import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogetherButtonSamplesComponent } from './together-button-samples.component';

describe('TogetherButtonSamplesComponent', () => {
  let component: TogetherButtonSamplesComponent;
  let fixture: ComponentFixture<TogetherButtonSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogetherButtonSamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogetherButtonSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
