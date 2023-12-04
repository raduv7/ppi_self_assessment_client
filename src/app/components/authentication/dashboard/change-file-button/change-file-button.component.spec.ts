import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeFileButtonComponent } from './change-file-button.component';

describe('ChangeFileButtonComponent', () => {
  let component: ChangeFileButtonComponent;
  let fixture: ComponentFixture<ChangeFileButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeFileButtonComponent]
    });
    fixture = TestBed.createComponent(ChangeFileButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
