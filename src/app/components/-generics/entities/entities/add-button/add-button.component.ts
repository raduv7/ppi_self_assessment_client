import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent {
  @Input() name!: string;
  @Input() route!: string;

  constructor(
    private router: Router
  ) {
  }

  onClick(): void {
    this.router.navigate([this.route]);
  }
}
