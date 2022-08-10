import {Component, OnInit} from '@angular/core';
import {IWeekendSchedule} from '../../../../interfaces/iweekend-schedule';
import {ActivatedRoute, Router} from '@angular/router';
import {ScheduleServiceService} from '../../../../services/schedule-service/schedule-service.service';
import {Session} from '../../../../enums/session';
import {ISessionTime} from '../../../../interfaces/isession-time';
import sessionTimeToDate from '../../../../helpers/session-time-to-date';
import {NavbarServiceService} from "../../../../services/navbar-service/navbar-service.service";

@Component({
  selector: 'app-weekend',
  templateUrl: './weekend.component.html',
  styleUrls: ['./weekend.component.scss'],
})
export class WeekendComponent implements OnInit {
  private sub: any;
  round!: number;
  isLoading = false;
  weekendData: IWeekendSchedule | null = null;
  session = Session;
  sessionRound: number = 1;
  raceDate!: ISessionTime;
  sessionsInTheFuture: Array<Session> = [];

  constructor(
    private route: ActivatedRoute,
    private scheduleService: ScheduleServiceService,
    private router: Router,
    private navbarService: NavbarServiceService
  ) {
    NavbarServiceService.show = true
    navbarService.backAnnounced$.subscribe(() => {
      this.router.navigate(['/schedule']);
    })
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.sub = this.route.params.subscribe((params) => {
      this.round = +params['round'];
    });

    this.scheduleService
      .getScheduledRoundInformation(this.round)
      .subscribe((data) => {
        this.weekendData = data;
        this.sessionRound = parseInt(this.weekendData.round);
        this.raceDate = {
          date: data.date,
          time: data.time,
        };

        const today = new Date();

        if (sessionTimeToDate(this.weekendData.firstPractice) > today) {
          this.sessionsInTheFuture.push(Session.FP1);
        }

        if (sessionTimeToDate(this.weekendData.secondPractice) > today) {
          this.sessionsInTheFuture.push(Session.FP2);
        }

        if (
          this.weekendData.thirdPractice &&
          sessionTimeToDate(this.weekendData.thirdPractice) > today
        ) {
          this.sessionsInTheFuture.push(Session.FP3);
        }

        if (sessionTimeToDate(this.weekendData.qualifying) > today) {
          this.sessionsInTheFuture.push(Session.Q);
        }

        if (
          this.weekendData.sprint &&
          sessionTimeToDate(this.weekendData.sprint) > today
        ) {
          this.sessionsInTheFuture.push(Session.SQ);
        }

        if (sessionTimeToDate(this.raceDate) > today) {
          this.sessionsInTheFuture.push(Session.R);
        }

        this.isLoading = false;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
