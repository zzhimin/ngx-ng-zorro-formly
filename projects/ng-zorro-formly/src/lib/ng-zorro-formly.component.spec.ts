import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgZorroFormlyComponent } from './ng-zorro-formly.component';

describe('NgZorroFormlyComponent', () => {
  let component: NgZorroFormlyComponent;
  let fixture: ComponentFixture<NgZorroFormlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgZorroFormlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgZorroFormlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
