import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEntryComponent } from './menu-entry.component';

describe('MenuEntryComponent', () => {
  let component: MenuEntryComponent;
  let fixture: ComponentFixture<MenuEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuEntryComponent]
    });
    fixture = TestBed.createComponent(MenuEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
