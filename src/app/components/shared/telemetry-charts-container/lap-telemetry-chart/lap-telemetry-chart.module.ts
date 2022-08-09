import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LapTelemetryChartComponent } from './lap-telemetry-chart.component';
import { LapTelemetryHeaderModule } from './lap-telemetry-header/lap-telemetry-header.module';
import { LapTelemetryChartItemModule } from './lap-telemetry-chart-item/lap-telemetry-chart-item.module';

@NgModule({
  declarations: [LapTelemetryChartComponent],
  imports: [
    CommonModule,
    LapTelemetryHeaderModule,
    LapTelemetryChartItemModule,
  ],
  exports: [LapTelemetryChartComponent],
})
export class LapTelemetryChartModule {}
