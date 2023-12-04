import {Component, EventEmitter, Output} from '@angular/core';
import {faHouseUser} from "@fortawesome/free-solid-svg-icons";
import {RouterService} from "../../../../utils/services/background-tasks/router.service";

@Component({
  selector: 'app-header-dashboard-button',
  templateUrl: './header-dashboard-button.component.html',
  styleUrls: ['./header-dashboard-button.component.scss']
})
export class HeaderDashboardButtonComponent {
  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>();

  protected readonly faHouseUser = faHouseUser;
  amIShown: boolean = true;

  constructor(private routerService: RouterService) {
    this.routerService.getIsHeaderDashboardButtonShown().subscribe(
      (getIsHeaderDashboardButton: boolean) => this.amIShown = getIsHeaderDashboardButton
    );
  }

  onClick(): void {
    this.clickEvent.emit();
  }
}
