import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFormSubmitButtonComponent } from './auth-form-submit-button.component';

describe('AuthFormSubmitButtonComponent', () => {
  let component: AuthFormSubmitButtonComponent;
  let fixture: ComponentFixture<AuthFormSubmitButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthFormSubmitButtonComponent]
    });
    fixture = TestBed.createComponent(AuthFormSubmitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
