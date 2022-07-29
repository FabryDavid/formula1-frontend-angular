import {Component, OnInit} from '@angular/core';
import {ScheduleServiceService} from "../../../../../services/schedule-service.service";
import {IWeekendSchedule} from "../../../../../interfaces/iweekend-schedule";

@Component({
  selector: 'app-upcoming-session-card',
  templateUrl: './upcoming-session-card.component.html',
  styleUrls: ['./upcoming-session-card.component.scss']
})
export class UpcomingSessionCardComponent implements OnInit {
  weekend: IWeekendSchedule | null = null
  nextSession = {
    name: "Fp2",
    remainingTime: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  constructor(private scheduleService: ScheduleServiceService) {
  }

  ngOnInit(): void {
    this.scheduleService.getUpcomingSession().subscribe((data) => {
      console.log(data)
      this.weekend = data
    })
  }
}
