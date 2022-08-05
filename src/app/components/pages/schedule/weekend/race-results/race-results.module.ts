import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RaceResultsComponent} from './race-results.component';
import {LeftSideTabsModule} from "../left-side-tabs/left-side-tabs.module";
import {LoadingModule} from "../../../../shared/page-loading-indicator/loading/loading.module";
import {RaceResultsContainerModule} from "./race-results-container/race-results-container.module";
import {SessionResultsChartModule} from "../../../../shared/session-results-chart/session-results-chart.module";
import {
    TelemetryChartsContainerModule
} from "../../../../shared/telemetry-charts-container/telemetry-charts-container.module";


@NgModule({
  declarations: [
    RaceResultsComponent
  ],
    imports: [
        CommonModule,
        LeftSideTabsModule,
        LoadingModule,
        RaceResultsContainerModule,
        SessionResultsChartModule,
        TelemetryChartsContainerModule
    ],
  exports: [RaceResultsComponent]
})
export class RaceResultsModule {
}
