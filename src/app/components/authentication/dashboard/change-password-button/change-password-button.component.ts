import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-change-password-button',
  templateUrl: './change-password-button.component.html',
  styleUrls: ['./change-password-button.component.scss']
})
export class ChangePasswordButtonComponent {
  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.clickEvent.emit();
  }
}
