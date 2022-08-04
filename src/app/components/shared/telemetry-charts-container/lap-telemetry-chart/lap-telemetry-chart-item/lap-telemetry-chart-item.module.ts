import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LapTelemetryChartItemComponent} from './lap-telemetry-chart-item.component';


@NgModule({
  declarations: [
    LapTelemetryChartItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LapTelemetryChartItemComponent]
})
export class LapTelemetryChartItemModule {
}
