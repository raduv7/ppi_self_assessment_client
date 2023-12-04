import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuEntryType} from "../../../../utils/models/entities/generics/menu-entry.type";

@Component({
  selector: 'app-menu-entry',
  templateUrl: './menu-entry.component.html',
  styleUrls: ['./menu-entry.component.scss']
})
export class MenuEntryComponent implements OnInit {
  @Input() entryType!: MenuEntryType;
  @Output() clickEvent: EventEmitter<string> = new EventEmitter<string>();
  shownName!: string;

  ngOnInit(): void {
    this.shownName = this.entryType.name.toUpperCase();
  }

  onClick(): void {
    this.clickEvent.emit(this.entryType.name.toLowerCase());
  }
}
