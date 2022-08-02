import {Component, OnInit} from '@angular/core';
import {ScheduleServiceService} from "../../../services/schedule-service.service";
import {IWeekendSchedule} from "../../../interfaces/iweekend-schedule";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  searchQuery = ""
  schedules: Array<IWeekendSchedule> = []
  isLoading = false

  get filteredSchedule() {
    if (!this.searchQuery) {
      return this.schedules
    }

    const search = this.searchQuery.toLowerCase()
    return this.schedules.filter((item) => {
      return (
        item.Circuit.Location.country.toLowerCase().indexOf(search) > -1 ||
        item.Circuit.circuitName.toLowerCase().indexOf(search) > -1 ||
        item.raceName.toLowerCase().indexOf(search) > -1 ||
        parseInt(item.round) === parseInt(search)
      );
    });
  }

  constructor(private scheduleService: ScheduleServiceService) {
  }

  ngOnInit(): void {
    this.isLoading = true
    this.scheduleService.getCurrentSchedule().subscribe((data) => {
      this.schedules = data
      this.isLoading = false
    })
  }

}
