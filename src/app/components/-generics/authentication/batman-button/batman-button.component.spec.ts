import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatmanButtonComponent } from './batman-button.component';

describe('BatmanButtonComponent', () => {
  let component: BatmanButtonComponent;
  let fixture: ComponentFixture<BatmanButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatmanButtonComponent]
    });
    fixture = TestBed.createComponent(BatmanButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
