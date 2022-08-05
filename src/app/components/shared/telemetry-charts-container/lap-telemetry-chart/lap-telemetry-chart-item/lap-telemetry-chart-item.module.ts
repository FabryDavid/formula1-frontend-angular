import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LapTelemetryChartItemComponent} from './lap-telemetry-chart-item.component';
import {NgApexchartsModule} from "ng-apexcharts";
import {LoadingModule} from "../../../page-loading-indicator/loading/loading.module";


@NgModule({
  declarations: [
    LapTelemetryChartItemComponent
  ],
    imports: [
        CommonModule,
        NgApexchartsModule,
        LoadingModule
    ],
  exports: [LapTelemetryChartItemComponent]
})
export class LapTelemetryChartItemModule {
}
