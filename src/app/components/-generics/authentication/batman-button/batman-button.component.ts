import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-batman-button',
  templateUrl: './batman-button.component.html',
  styleUrls: ['./batman-button.component.scss']
})
export class BatmanButtonComponent {
  @Output() clickEvent: EventEmitter<any> = new EventEmitter();

  onClick() {
    this.clickEvent.emit('Button clicked!');
  }
}
