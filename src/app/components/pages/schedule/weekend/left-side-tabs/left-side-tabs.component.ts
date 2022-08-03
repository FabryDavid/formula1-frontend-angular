import {Component, Input, OnInit} from '@angular/core';
import {ISessionTime} from "../../../../../interfaces/isession-time";
import sessionTimeToDate from "../../../../../helpers/session-time-to-date";

@Component({
  selector: 'app-left-side-tabs',
  templateUrl: './left-side-tabs.component.html',
  styleUrls: ['./left-side-tabs.component.scss']
})
export class LeftSideTabsComponent implements OnInit {
  @Input() sessionName!: string;
  @Input() sessionDate!: ISessionTime;
  @Input() options!: Array<string>

  activeItem = 0

  get sessionDateFormatted() {
    const sessionD = sessionTimeToDate(this.sessionDate)

    return sessionD.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      hour12: false,
      minute: "2-digit",
    })
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
