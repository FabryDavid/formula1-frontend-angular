import {Component, OnInit} from '@angular/core';
import {IWeekendSchedule} from "../../../../interfaces/iweekend-schedule";
import {ActivatedRoute} from "@angular/router";
import {ScheduleServiceService} from "../../../../services/schedule-service.service";

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

  constructor(private route: ActivatedRoute, private scheduleService: ScheduleServiceService) {
  }

  ngOnInit(): void {
    this.isLoading = true
    this.sub = this.route.params.subscribe(params => {
      this.round = +params['round'];
    });

    this.scheduleService.getScheduledRoundInformation(this.round).subscribe((data) => {
      this.weekendData = data
      this.isLoading = false
    })
  }

  get test() {
    return JSON.stringify(this.weekendData)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
