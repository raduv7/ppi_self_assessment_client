import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header-menu-button',
  templateUrl: './header-menu-button.component.html',
  styleUrls: ['./header-menu-button.component.scss']
})
export class HeaderMenuButtonComponent {
  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>();

  private wasClickedRecently: boolean = false;

  onClick(): void {
    if(!this.wasClickedRecently) {
      this.clickEvent.emit();

      this.wasClickedRecently = true;
      setTimeout((): void => {
        this.wasClickedRecently = false;
      }, 300)
    }
  }
}
