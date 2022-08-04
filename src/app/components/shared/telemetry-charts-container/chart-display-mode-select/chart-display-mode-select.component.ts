import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TelemetryChartMode} from "../../../../enums/telemetry-chart-mode";

@Component({
  selector: 'app-chart-display-mode-select',
  templateUrl: './chart-display-mode-select.component.html',
  styleUrls: ['./chart-display-mode-select.component.scss']
})
export class ChartDisplayModeSelectComponent implements OnInit {
  @Input() lapByLapData: boolean = false
  @Input() currentChartMode: TelemetryChartMode = TelemetryChartMode.LAP_TIME

  @Output() lapByLapDataChange = new EventEmitter<boolean>()
  @Output() currentChartModeChange = new EventEmitter<TelemetryChartMode>()

  telemetryChartMode = TelemetryChartMode

  constructor() {
  }

  ngOnInit(): void {
  }

}
