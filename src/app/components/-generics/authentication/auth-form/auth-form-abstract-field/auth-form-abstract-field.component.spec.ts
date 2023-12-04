import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFormAbstractFieldComponent } from './auth-form-abstract-field.component';

describe('AuthFormAbstractFieldComponent', () => {
  let component: AuthFormAbstractFieldComponent;
  let fixture: ComponentFixture<AuthFormAbstractFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthFormAbstractFieldComponent]
    });
    fixture = TestBed.createComponent(AuthFormAbstractFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
