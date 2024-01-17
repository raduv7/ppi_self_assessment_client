import {Component, OnInit} from '@angular/core';
import {MenuEntryType} from "../../../utils/models/entities/generics/menu-entry.type";
import {Router} from "@angular/router";
import {OperationService} from "../../../utils/services/entities/generics/operation.service";
import {BehaviorSubject, Observable, Subscriber} from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  operations: BehaviorSubject<MenuEntryType[]> = new BehaviorSubject<MenuEntryType[]>([]);

  constructor(
    private router: Router,
    private operationService: OperationService,
  ) {
  }

  ngOnInit(): void {
    // this.operationService.getMenuEntryTypes()
    //   .subscribe(types => {
    //     console.log(types);
    //     this.operations.next(types);
    //     // console.log(this.operations.value);
    //   });
    const myObs = new Observable<MenuEntryType[]>(
      subscriber=> {
        subscriber.next([ {name: "assessments"}, ]);
      }
    )

    myObs.subscribe(types => {
      console.log(types);
      this.operations.next(types);
      // console.log(this.operations.value);
    });
  }

  onEntryClick(route: string): void {
    this.router.navigate(["/" + route + "-list"]);
  }
}
