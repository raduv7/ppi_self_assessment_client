import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsAddFileComponent } from './payments-add-file.component';

describe('PaymentsAddFileComponent', () => {
  let component: PaymentsAddFileComponent;
  let fixture: ComponentFixture<PaymentsAddFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentsAddFileComponent]
    });
    fixture = TestBed.createComponent(PaymentsAddFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
