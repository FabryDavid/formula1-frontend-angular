import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelemetryChartsContainerComponent } from './telemetry-charts-container.component';
import { ChartDisplayModeSelectModule } from './chart-display-mode-select/chart-display-mode-select.module';
import { FullSessionChartModule } from './full-session-chart/full-session-chart.module';
import { LapTelemetryChartModule } from './lap-telemetry-chart/lap-telemetry-chart.module';

@NgModule({
  declarations: [TelemetryChartsContainerComponent],
  imports: [
    CommonModule,
    ChartDisplayModeSelectModule,
    FullSessionChartModule,
    LapTelemetryChartModule,
  ],
  exports: [TelemetryChartsContainerComponent],
})
export class TelemetryChartsContainerModule {}
