import {Component, Input, OnInit} from '@angular/core';
import {TelemetryChartMode} from '../../../enums/telemetry-chart-mode';
import {Session} from '../../../enums/session';

@Component({
  selector: 'app-telemetry-charts-container',
  templateUrl: './telemetry-charts-container.component.html',
  styleUrls: ['./telemetry-charts-container.component.scss'],
})
export class TelemetryChartsContainerComponent implements OnInit {
  @Input() round!: string | number;
  @Input() session!: Session;

  lapByLapData: boolean = false;
  currentChartMode = TelemetryChartMode.LAP_TIME;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.round)
  }
}
