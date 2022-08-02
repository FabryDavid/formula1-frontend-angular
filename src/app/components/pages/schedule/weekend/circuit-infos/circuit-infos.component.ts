import {Component, Input, OnInit} from '@angular/core';
import {IWeekendSchedule} from "../../../../../interfaces/iweekend-schedule";
import getCountryCode from "../../../../../helpers/countryCodes";
import {SessionTimeService} from "../../../../../services/session-time-service/session-time.service";
import {ISectorTimes} from "../../../../../interfaces/isector-times";

@Component({
  selector: 'app-circuit-infos',
  templateUrl: './circuit-infos.component.html',
  styleUrls: ['./circuit-infos.component.scss']
})
export class CircuitInfosComponent implements OnInit {
  @Input() weekend!: IWeekendSchedule
  countryCode: string = ""
  isLoading = false
  sectorTimes?: ISectorTimes

  constructor(private sessionTimesService: SessionTimeService) {
  }

  ngOnInit(): void {
    this.countryCode = getCountryCode(this.weekend.Circuit.Location.country) ?? ""

    this.sessionTimesService.getFastestSessionsInWeekend(parseInt(this.weekend.round)).subscribe((data) => {
      console.log(data)
      this.sectorTimes = data
    })
  }

}
