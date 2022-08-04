import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LapTelemetryChartComponent} from './lap-telemetry-chart.component';
import {LapTelemetryHeaderModule} from "./lap-telemetry-header/lap-telemetry-header.module";


@NgModule({
  declarations: [
    LapTelemetryChartComponent
  ],
    imports: [
        CommonModule,
        LapTelemetryHeaderModule
    ],
  exports: [LapTelemetryChartComponent]
})
export class LapTelemetryChartModule {
}
