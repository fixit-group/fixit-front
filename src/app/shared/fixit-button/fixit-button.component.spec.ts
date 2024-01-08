import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixitButtonComponent } from './fixit-button.component';

describe('FixitButtonComponent', () => {
  let component: FixitButtonComponent;
  let fixture: ComponentFixture<FixitButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixitButtonComponent]
    });
    fixture = TestBed.createComponent(FixitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
