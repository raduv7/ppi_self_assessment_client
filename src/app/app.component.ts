import {Component, HostBinding, OnInit} from '@angular/core';

import { HttpInterceptorService } from './utils/services/background-tasks/http-interceptor.service';
import {fadeAnimation} from "./route-animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]  // add the animation here
})
export class AppComponent implements OnInit {
  @HostBinding('@fadeAnimation') routeAnimation = true;

  isMenuShown: boolean = false;
  isBeforeGoMenu: boolean = false;
  isLoading: boolean = false;
  spinnerActive: boolean = false;
  title: string = 'monpays-client';

  constructor(private httpInterceptor: HttpInterceptorService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.spinnerActive = true;
    this.httpInterceptor.isLoading.subscribe(
      (loading: boolean) => this.setIsLoading(loading)
    );
  }

  prepareRoute(outlet: any) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  setIsLoading(loading: boolean) {
    if(!loading) {
      setTimeout(() => {
        this.isLoading = loading;
      }, 1000);
      setTimeout(() => {
        this.spinnerActive = loading;
      }, 1500);
    }
    else {
      this.isLoading = loading;
      this.spinnerActive = loading;
    }
  }

  onMenuButtonClick(): void {
    this.isBeforeGoMenu = true;
    setTimeout((): void => {
      this.isMenuShown = !this.isMenuShown;
      this.isBeforeGoMenu = false;
    }, 300)
  }
}
