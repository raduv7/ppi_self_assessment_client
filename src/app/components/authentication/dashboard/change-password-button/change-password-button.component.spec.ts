import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordButtonComponent } from './change-password-button.component';

describe('ChangePasswordButtonComponent', () => {
  let component: ChangePasswordButtonComponent;
  let fixture: ComponentFixture<ChangePasswordButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangePasswordButtonComponent]
    });
    fixture = TestBed.createComponent(ChangePasswordButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
