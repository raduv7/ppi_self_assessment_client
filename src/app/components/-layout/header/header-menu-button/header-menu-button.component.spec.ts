import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuButtonComponent } from './header-menu-button.component';

describe('HeaderMenuButtonComponent', () => {
  let component: HeaderMenuButtonComponent;
  let fixture: ComponentFixture<HeaderMenuButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderMenuButtonComponent]
    });
    fixture = TestBed.createComponent(HeaderMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
