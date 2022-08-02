import {Component, OnInit} from '@angular/core';
import {ScheduleServiceService} from "../../../../../services/schedule-service/schedule-service.service";
import {IWeekendSchedule} from "../../../../../interfaces/iweekend-schedule";
import sessionTimeToDate from "../../../../../helpers/session-time-to-date";
import {INextSession} from "../../../../../interfaces/inext-session";

@Component({
  selector: 'app-upcoming-session-card',
  templateUrl: './upcoming-session-card.component.html',
  styleUrls: ['./upcoming-session-card.component.scss']
})
export class UpcomingSessionCardComponent implements OnInit {
  weekend: IWeekendSchedule | null = null
  countDown: number | null = null
  today=new Date()
  nextSession = {
    name: "Fp2",
    time: new Date(),
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
      this.weekend = data

      const nextSession = this.getNextSession(this.weekend)

      if (nextSession) {
        this.nextSession.name = nextSession.session
        this.nextSession.time = nextSession.time

        this.startCountDown(nextSession.time)
      }
    })
  }

  getNextSession(schedule: IWeekendSchedule) {
    const sessionTimes: Array<INextSession> = []

    sessionTimes.push({
      session: "Fp1",
      time: sessionTimeToDate(schedule.FirstPractice)
    })

    sessionTimes.push({
      session: "Fp2",
      time: sessionTimeToDate(schedule.SecondPractice)
    })

    sessionTimes.push({
      session: "Qualifying",
      time: sessionTimeToDate(schedule.Qualifying)
    })

    sessionTimes.push({
      session: "Race",
      time: new Date(`${schedule.date}T${schedule.time}`)
    })

    if (schedule.ThirdPractice) {
      sessionTimes.push({
        session: "Fp3",
        time: sessionTimeToDate(schedule.ThirdPractice)
      })
    }

    if (schedule.Sprint) {
      sessionTimes.push({
        session: "Fp3",
        time: sessionTimeToDate(schedule.Sprint)
      })
    }

    let closest: INextSession | null = null;
    this.today = new Date();

    for (let i = 0; i < sessionTimes.length; i++) {
      if (
        this.today.getTime() < sessionTimes[i].time.getTime() &&
        (!closest ||
          sessionTimes[i].time.getTime() < closest.time.getTime())
      ) {
        closest = sessionTimes[i];
      }
    }

    return closest;
  }

  startCountDown(time: Date) {
    this.clearCountDown()

    this.countDown = window.setInterval(() => {
      this.setTimeRemaining();
    }, 1000)
  }

  setTimeRemaining() {
    this.today = new Date();
    const total = this.nextSession.time.getTime() - this.today.getTime();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    this.nextSession.remainingTime = {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  clearCountDown() {
    if (this.countDown) {
      window.clearInterval(this.countDown)
    }
  }

  ngOnDestroy() {
    this.clearCountDown()
  }
}
