import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISessionTime} from '../../../../../interfaces/isession-time';
import {Session} from '../../../../../enums/session';
import sessionTimeToDate from '../../../../../helpers/session-time-to-date';

@Component({
  selector: 'app-left-side-tabs',
  templateUrl: './left-side-tabs.component.html',
  styleUrls: ['./left-side-tabs.component.scss'],
})
export class LeftSideTabsComponent implements OnInit {
  @Input() sessionName!: Session;
  @Input() sessionDate!: ISessionTime;
  @Input() options!: Array<string>;
  @Input() activeItem?: number = 0;

  @Output() activeItemChange = new EventEmitter<number>();

  sessionNameFormatted!: string;
  sessionDateFormatted!: string;

  constructor() {}

  ngOnInit(): void {
    switch (this.sessionName) {
      case Session.Q:
        this.sessionNameFormatted = 'Quali';
        break;
      case Session.R:
        this.sessionNameFormatted = 'Race';
        break;
      default:
        this.sessionNameFormatted = this.sessionName;
        break;
    }

    const sessionD = sessionTimeToDate(this.sessionDate);
    this.sessionDateFormatted = sessionD.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
    });
  }
}
