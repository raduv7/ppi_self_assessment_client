import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-auth-form-submit-button',
  templateUrl: './auth-form-submit-button.component.html',
  styleUrls: ['./auth-form-submit-button.component.scss']
})
export class AuthFormSubmitButtonComponent {
  @Output() clickEvent: EventEmitter<any> = new EventEmitter();

  onClick(): void {
    this.clickEvent.emit('Submit button clicked.');
  }
}
