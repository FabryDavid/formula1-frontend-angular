import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ILapDetailedTelemetry} from "../../../../../interfaces/ilap-detailed-telemetry";

@Component({
  selector: 'app-lap-telemetry-chart-item',
  templateUrl: './lap-telemetry-chart-item.component.html',
  styleUrls: ['./lap-telemetry-chart-item.component.scss']
})
export class LapTelemetryChartItemComponent implements OnInit, OnChanges {
  @Input() lapTelemetry: Array<ILapDetailedTelemetry> = []

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.lapTelemetry) {
      const telemetry = changes.lapTelemetry.currentValue
      console.log(telemetry)
    }
  }
}
