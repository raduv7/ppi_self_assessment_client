import { Injectable } from '@angular/core';
import {BehaviorSubject, filter, Observable, Subject, Subscription} from "rxjs";
import {ActivatedRoute, NavigationEnd, Route, Router, RouterEvent} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  static readonly pathsWithoutHeader: string[] = ['/', ''];
  static readonly pathPrefixesWithoutHeader: string[] = ['forbidden', 'not-found', 'sign-in', 'sign-up', 'error'];
  static readonly pathPrefixesWithoutHeaderDashboardButton: string[] = ['dashboard'];

  private subscription: Subscription;

  isHeaderShown: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isHeaderDashboardButtonShown: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  pageTitle: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor(private router: Router) {
    this.smoothStart(this.router.url);
    this.subscription = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.smoothRedirect(event);
    });
  }

  smoothRedirect(event: NavigationEnd): void {
    let route: ActivatedRoute = this.router.routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    this.smoothStart(route.snapshot.url + '');
  }

  smoothStart(url: string): void {
    this.setIsHeaderShown(url);
    this.setIsHeaderDashboardButtonShown(url);
    this.setPageTitle(url);
  }

  setIsHeaderShown(path: string): void {
    this.isHeaderShown.next(this.wouldHeaderBeShown(path));
  }

  wouldHeaderBeShown(path: string): boolean {
    for (const pathWithoutHeader of RouterService.pathsWithoutHeader) {
      if (path === pathWithoutHeader) {
        return false;
      }
    }
    for (const pathPrefixWithoutHeader of RouterService.pathPrefixesWithoutHeader) {
      if (path.includes(pathPrefixWithoutHeader)) {
        return false;
      }
    }
    return true;
  }

  getIsHeaderShown(): Observable<boolean> {
    this.setIsHeaderShown(this.router.url);
    return this.isHeaderShown.asObservable();
  }

  setIsHeaderDashboardButtonShown(path: string): void {
    for (const pathPrefixWithoutHeaderDashboardButton of RouterService.pathPrefixesWithoutHeaderDashboardButton) {
      if (path.includes(pathPrefixWithoutHeaderDashboardButton)) {
        this.isHeaderDashboardButtonShown.next(false);
        return;
      }
    }
    this.isHeaderDashboardButtonShown.next(true);
  }

  getIsHeaderDashboardButtonShown(): Observable<boolean> {
    return this.isHeaderDashboardButtonShown.asObservable();
  }

  getPageTitle(): Observable<string> {
    return this.pageTitle.asObservable();
  }
  setPageTitle(path: string): void {
    let newTitle: string | null = this.getRouteTitleByPath(path);
    if (newTitle === null) {
      newTitle = 'Monpays';
    }
    this.pageTitle.next(newTitle);
  }
  getRouteTitleByPath(path: string): string | null {
    const route: Route | undefined = this.router.config.find(r => r.path === path);
    return route?.data?.['title'] || null;
  }
}
