import { Component } from '@angular/core';
import {RouterService} from "../../../../utils/services/background-tasks/router.service";

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.scss']
})
export class HeaderTitleComponent {
  title: string = '';

  constructor(private routerService: RouterService) {
    this.routerService.getPageTitle().subscribe((title: string) => {
      this.title = title;
    });
  }
}
