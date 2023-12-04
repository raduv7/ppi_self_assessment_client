import {Component, EventEmitter, Output} from '@angular/core';
import {RouterService} from "../../../utils/services/background-tasks/router.service";
import {Router} from "@angular/router";
import {SessionService} from "../../../utils/services/session-management/session.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() onMenuButtonClickEvent: EventEmitter<void> = new EventEmitter<void>();

  amIShown: boolean = false;

  constructor(
      private router: Router,
      private routerService: RouterService,
      private sessionService: SessionService,
  ) {
    this.routerService.getIsHeaderShown().subscribe(
      (isHeaderShown: boolean) => this.amIShown = isHeaderShown
    );
  }

  onSignOutClick($event: void) {
    this.sessionService.signOut();
    this.router.navigate(['/landing']);
  }

  onDashboardClick($event: void) {
    this.router.navigate(['/dashboard']);
  }

  onMenuClick($event: void) {
    // console.log("menu butt clicked");
    this.onMenuButtonClickEvent.emit();
  }
}
