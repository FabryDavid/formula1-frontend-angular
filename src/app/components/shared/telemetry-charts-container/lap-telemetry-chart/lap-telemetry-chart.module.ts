import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LapTelemetryChartComponent} from './lap-telemetry-chart.component';


@NgModule({
  declarations: [
    LapTelemetryChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LapTelemetryChartComponent]
})
export class LapTelemetryChartModule {
}
