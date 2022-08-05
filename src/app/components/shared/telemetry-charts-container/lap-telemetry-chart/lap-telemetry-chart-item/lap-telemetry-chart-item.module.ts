import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LapTelemetryChartItemComponent} from './lap-telemetry-chart-item.component';
import {NgApexchartsModule} from "ng-apexcharts";


@NgModule({
  declarations: [
    LapTelemetryChartItemComponent
  ],
    imports: [
        CommonModule,
        NgApexchartsModule
    ],
  exports: [LapTelemetryChartItemComponent]
})
export class LapTelemetryChartItemModule {
}
