import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SessionResultsComponent} from './session-results.component';
import {LeftSideTabsModule} from "../left-side-tabs/left-side-tabs.module";
import {LoadingModule} from "../../../../shared/page-loading-indicator/loading/loading.module";
import {RouterModule} from "@angular/router";
import {ResultModule} from "./result/result.module";
import {SessionResultsChartModule} from "../session-results-chart/session-results-chart.module";


@NgModule({
  declarations: [
    SessionResultsComponent
  ],
    imports: [
        CommonModule,
        LeftSideTabsModule,
        LoadingModule,
        RouterModule,
        ResultModule,
        SessionResultsChartModule
    ],
  exports: [SessionResultsComponent]
})
export class SessionResultsModule {
}
