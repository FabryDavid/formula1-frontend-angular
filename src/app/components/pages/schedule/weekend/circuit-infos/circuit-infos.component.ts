import {Component, Input, OnInit} from '@angular/core';
import {IWeekendSchedule} from "../../../../../interfaces/iweekend-schedule";

@Component({
  selector: 'app-circuit-infos',
  templateUrl: './circuit-infos.component.html',
  styleUrls: ['./circuit-infos.component.scss']
})
export class CircuitInfosComponent implements OnInit {
  @Input() weekend!: IWeekendSchedule

  constructor() {
  }

  ngOnInit(): void {
  }

}
