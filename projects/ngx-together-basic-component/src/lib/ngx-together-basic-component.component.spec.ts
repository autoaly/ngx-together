import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTogetherBasicComponentComponent } from './ngx-together-basic-component.component';

describe('NgxTogetherBasicComponentComponent', () => {
  let component: NgxTogetherBasicComponentComponent;
  let fixture: ComponentFixture<NgxTogetherBasicComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTogetherBasicComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTogetherBasicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
