import {Component, OnInit} from '@angular/core';
import {SessionService} from "../../../utils/services/session-management/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  username!: string;

  constructor(
      private router: Router,
      private sessionService: SessionService,
  ) { }

  ngOnInit(): void {
    this.username = this.sessionService.getUsername();
  }

    onChangePasswordButtonClick() {
        this.router.navigate(['/change-password']);
    }
}
