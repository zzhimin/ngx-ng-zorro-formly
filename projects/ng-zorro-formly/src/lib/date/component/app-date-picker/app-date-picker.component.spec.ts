import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDatePickerComponent } from './app-date-picker.component';

describe('AppDatePickerComponent', () => {
  let component: AppDatePickerComponent;
  let fixture: ComponentFixture<AppDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDatePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
