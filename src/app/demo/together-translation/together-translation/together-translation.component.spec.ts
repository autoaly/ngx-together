import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogetherTranslationComponent } from './together-translation.component';

describe('TogetherTranslationComponent', () => {
  let component: TogetherTranslationComponent;
  let fixture: ComponentFixture<TogetherTranslationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogetherTranslationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogetherTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
