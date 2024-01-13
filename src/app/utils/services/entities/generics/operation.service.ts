import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SessionService} from "../../session-management/session.service";
import {map, Observable, pipe} from "rxjs";
import {MenuEntryType} from "../../../models/entities/generics/menu-entry.type";
import {environment} from "../../../../../environment/environment";
import {OperationDtoType} from "../../../models/dto/generic/operationDto.type";

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(
    private httpClient: HttpClient,
    private sessionService: SessionService,
    ) { }

  getMenuEntryTypes(): Observable<MenuEntryType[]> {
    return this.reqOperations()
      .pipe(
      map(operations =>
        operations.map(operation => {
          console.log(operation);

          if (operation.groupName.toLowerCase() === "profile") {
            let type: MenuEntryType = { name: "profile" };
            return type;
          } else if (operation.groupName.toLowerCase() === "user") {
            let type: MenuEntryType = { name: "users" };
            return type;
          } else if (operation.groupName.toLowerCase() === "schedule") {
            let type: MenuEntryType = { name: "schedules" };
            return type;
          } else if (operation.groupName.toLowerCase() === "exam") {
            let type: MenuEntryType = { name: "exams" };
            return type;
          } else if (operation.groupName.toLowerCase() === "department") {
            let type: MenuEntryType = { name: "departments" };
            return type;
          } else if (operation.groupName.toLowerCase() === "classroom") {
            let type: MenuEntryType = { name: "classrooms" };
            return type;
          } else {
            return null;
          }

        })
      ),
      map(items => items.filter(item => item !== null) as MenuEntryType[]) // This map filters out null values
    );
  }
  private reqOperations(): Observable<OperationDtoType[]> {
    return this.httpClient.get<OperationDtoType[]>(
      environment.apiBaseUrl + "/operations/list",
      {
        headers: this.sessionService.getHeaders()
      }
    );
  }
}
