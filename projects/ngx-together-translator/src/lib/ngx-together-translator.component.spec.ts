import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTogetherTranslatorComponent } from './ngx-together-translator.component';

describe('NgxTogetherTranslatorComponent', () => {
  let component: NgxTogetherTranslatorComponent;
  let fixture: ComponentFixture<NgxTogetherTranslatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTogetherTranslatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTogetherTranslatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
