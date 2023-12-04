import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSignOutButtonComponent } from './header-sign-out-button.component';

describe('HeaderSignOutButtonComponent', () => {
  let component: HeaderSignOutButtonComponent;
  let fixture: ComponentFixture<HeaderSignOutButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderSignOutButtonComponent]
    });
    fixture = TestBed.createComponent(HeaderSignOutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
