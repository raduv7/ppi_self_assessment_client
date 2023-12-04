import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import { inject } from "@angular/core";
import {RouterService} from "../background-tasks/router.service";
import {SessionService} from "./session.service";
import {combineLatest, map, of} from "rxjs";
import {tap} from "rxjs/operators";
import {toObservable} from "@angular/core/rxjs-interop";

export const sessionGuard:
  CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  let router: Router = inject(Router);
  let routerService: RouterService = inject(RouterService);
  let sessionService: SessionService = inject(SessionService);

  const isHeaderShown = routerService.wouldHeaderBeShown(state.url);
  const isAuthenticated = sessionService.isAuthenticatedValue();

  if (isHeaderShown && !isAuthenticated) {
      router.navigate(['/error-401']);
      return false;
  }
  return true;
};
