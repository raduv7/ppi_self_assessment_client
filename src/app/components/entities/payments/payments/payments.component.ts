import { Component } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {
  addButtonName: string = "Add Payment";
  addButtonRoute: string = "/payments-add";
  addFileButtonName: string = "Add Payments File";
  addFileButtonRoute: string = "/payments-add-file";
}
