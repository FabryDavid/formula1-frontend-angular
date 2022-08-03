import {Component, Input, OnInit} from '@angular/core';
import {ISessionTime} from "../../../../../interfaces/isession-time";
import sessionTimeToDate from "../../../../../helpers/session-time-to-date";

@Component({
  selector: 'app-upcoming-session-display',
  templateUrl: './upcoming-session-display.component.html',
  styleUrls: ['./upcoming-session-display.component.scss']
})
export class UpcomingSessionDisplayComponent implements OnInit {
  @Input() sessionDate!: ISessionTime

  sessionDateFormatted!: string

  constructor() {
  }

  ngOnInit(): void {
    const sessionD = sessionTimeToDate(this.sessionDate)
    this.sessionDateFormatted = sessionD.toLocaleString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    })
  }

}
