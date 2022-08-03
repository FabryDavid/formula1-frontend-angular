import {Component, OnInit} from '@angular/core';
import {IWeekendSchedule} from "../../../../interfaces/iweekend-schedule";
import {ActivatedRoute} from "@angular/router";
import {ScheduleServiceService} from "../../../../services/schedule-service/schedule-service.service";
import {Session} from "../../../../enums/session";
import {ISessionTime} from "../../../../interfaces/isession-time";
import sessionTimeToDate from "../../../../helpers/session-time-to-date";

@Component({
  selector: 'app-weekend',
  templateUrl: './weekend.component.html',
  styleUrls: ['./weekend.component.scss']
})
export class WeekendComponent implements OnInit {
  private sub: any;
  round!: number;
  isLoading = false
  weekendData: IWeekendSchedule | null = null
  session = Session
  raceDate!: ISessionTime
  sessionsInTheFuture: Array<Session> = []

  constructor(private route: ActivatedRoute, private scheduleService: ScheduleServiceService) {
  }

  ngOnInit(): void {
    this.isLoading = true
    this.sub = this.route.params.subscribe(params => {
      this.round = +params['round'];
    });

    this.scheduleService.getScheduledRoundInformation(this.round).subscribe((data) => {
      this.weekendData = data
      this.raceDate = {
        date: data.date,
        time: data.time
      }

      const today = new Date()

      if (sessionTimeToDate(this.weekendData.FirstPractice) > today) {
        this.sessionsInTheFuture.push(Session.FP1)
      }

      if (sessionTimeToDate(this.weekendData.SecondPractice) > today) {
        this.sessionsInTheFuture.push(Session.FP2)
      }

      if (this.weekendData.ThirdPractice && sessionTimeToDate(this.weekendData.ThirdPractice) > today) {
        this.sessionsInTheFuture.push(Session.FP3)
      }

      if (sessionTimeToDate(this.weekendData.Qualifying) > today) {
        this.sessionsInTheFuture.push(Session.Q)
      }

      if (this.weekendData.Sprint && sessionTimeToDate(this.weekendData.Sprint) > today) {
        this.sessionsInTheFuture.push(Session.SPRINT)
      }

      if (sessionTimeToDate(this.raceDate) > today) {
        this.sessionsInTheFuture.push(Session.R)
      }

      this.isLoading = false
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
