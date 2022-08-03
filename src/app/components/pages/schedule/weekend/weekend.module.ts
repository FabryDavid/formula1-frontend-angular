import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeekendRoutingModule} from './weekend-routing.module';
import {WeekendComponent} from "./weekend.component";
import {LoadingModule} from "../../../shared/page-loading-indicator/loading/loading.module";
import {BannerModule} from "./banner/banner.module";
import {MatTabsModule} from "@angular/material/tabs";
import {CircuitInfosModule} from "./circuit-infos/circuit-infos.module";
import {SessionResultsModule} from "./session-results/session-results.module";
import {UpcomingSessionDisplayModule} from "./upcoming-session-display/upcoming-session-display.module";


@NgModule({
  declarations: [WeekendComponent],
  imports: [
    CommonModule,
    WeekendRoutingModule,
    LoadingModule,
    BannerModule,
    MatTabsModule,
    CircuitInfosModule,
    SessionResultsModule,
    UpcomingSessionDisplayModule
  ]
})
export class WeekendModule {
}
