import {Component, Input, OnInit} from '@angular/core';
import {Session} from "../../../../enums/session";
import {ILapDetailedTelemetry} from "../../../../interfaces/ilap-detailed-telemetry";

@Component({
  selector: 'app-lap-telemetry-chart',
  templateUrl: './lap-telemetry-chart.component.html',
  styleUrls: ['./lap-telemetry-chart.component.scss']
})
export class LapTelemetryChartComponent implements OnInit {
  @Input() round!: string | number
  @Input() session!: Session

  lapData: Array<ILapDetailedTelemetry> = []
  isLoading: boolean = false

  constructor() {
  }

  ngOnInit(): void {
  }

}
