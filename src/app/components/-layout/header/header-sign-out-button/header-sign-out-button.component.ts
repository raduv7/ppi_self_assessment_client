import {Component, EventEmitter, Output} from '@angular/core';
import {faArrowRightFromBracket, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {SessionService} from "../../../../utils/services/session-management/session.service";

@Component({
  selector: 'app-header-sign-out-button',
  templateUrl: './header-sign-out-button.component.html',
  styleUrls: ['./header-sign-out-button.component.scss']
})
export class HeaderSignOutButtonComponent {
  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>();

  protected readonly faArrowRightFromBracket: IconDefinition = faArrowRightFromBracket;

  public onClick(): void {
    this.clickEvent.emit();
  }
}
