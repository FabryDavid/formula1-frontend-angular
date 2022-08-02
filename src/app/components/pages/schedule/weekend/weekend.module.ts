import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeekendRoutingModule} from './weekend-routing.module';
import {WeekendComponent} from "./weekend.component";
import {LoadingModule} from "../../../shared/page-loading-indicator/loading/loading.module";
import {BannerModule} from "./banner/banner.module";


@NgModule({
  declarations: [WeekendComponent],
  imports: [
    CommonModule,
    WeekendRoutingModule,
    LoadingModule,
    BannerModule
  ]
})
export class WeekendModule {
}
