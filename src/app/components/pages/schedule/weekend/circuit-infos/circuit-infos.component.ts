import {Component, Input, OnInit} from '@angular/core';
import {IWeekendSchedule} from "../../../../../interfaces/iweekend-schedule";
import getCountryCode from "../../../../../helpers/countryCodes";

@Component({
  selector: 'app-circuit-infos',
  templateUrl: './circuit-infos.component.html',
  styleUrls: ['./circuit-infos.component.scss']
})
export class CircuitInfosComponent implements OnInit {
  @Input() weekend!: IWeekendSchedule
  countryCode: string = ""

  constructor() {
  }

  ngOnInit(): void {
    this.countryCode = getCountryCode(this.weekend.Circuit.Location.country) ?? ""
  }

}
