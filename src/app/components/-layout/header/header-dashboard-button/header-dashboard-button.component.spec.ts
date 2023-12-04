import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDashboardButtonComponent } from './header-dashboard-button.component';

describe('HeaderDashboardButtonComponent', () => {
  let component: HeaderDashboardButtonComponent;
  let fixture: ComponentFixture<HeaderDashboardButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderDashboardButtonComponent]
    });
    fixture = TestBed.createComponent(HeaderDashboardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
