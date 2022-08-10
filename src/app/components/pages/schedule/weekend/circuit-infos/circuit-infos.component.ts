import { Component, Input, OnInit } from '@angular/core';
import { IWeekendSchedule } from '../../../../../interfaces/iweekend-schedule';
import getCountryCode from '../../../../../helpers/country-codes';
import { SessionTimeService } from '../../../../../services/session-time-service/session-time.service';
import { ISectorTimes } from '../../../../../interfaces/isector-times';
import sessionTimeToDate from '../../../../../helpers/session-time-to-date';

@Component({
  selector: 'app-circuit-infos',
  templateUrl: './circuit-infos.component.html',
  styleUrls: ['./circuit-infos.component.scss'],
})
export class CircuitInfosComponent implements OnInit {
  @Input() weekend!: IWeekendSchedule;
  countryCode: string = '';
  isLoading = false;
  sectorTimes?: ISectorTimes;
  showSectorTimes = true;
  sectorTimesError: string | null = null;

  constructor(private sessionTimesService: SessionTimeService) {}

  ngOnInit(): void {
    this.isLoading = true;

    this.countryCode =
      getCountryCode(this.weekend.circuit.Location.country) ?? '';

    this.showSectorTimes =
      sessionTimeToDate(this.weekend.firstPractice).getTime() <
      new Date().getTime();

    if (this.showSectorTimes) {
      this.sessionTimesService
        .getFastestSessionsInWeekend(this.weekend.circuit.Location.country)
        .subscribe(
          (data) => {
            this.sectorTimes = data;
          },
          () => {
            this.sectorTimesError = "Couldn't load data";
          }
        )
        .add(() => {
          this.isLoading = false;
        });
    } else {
      this.isLoading = false;
    }
  }
}
