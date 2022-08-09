import {Component, Input, OnInit} from '@angular/core';
import {IWeekendSchedule} from '../../../../interfaces/iweekend-schedule';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss'],
})
export class ScheduleItemComponent implements OnInit {
  @Input() weekend!: IWeekendSchedule;

  constructor() {
  }

  ngOnInit(): void {
  }
}
