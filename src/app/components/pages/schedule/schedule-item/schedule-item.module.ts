import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScheduleItemComponent} from "./schedule-item.component";
import {RouterModule} from "@angular/router";
import {WeekendDatesModule} from "../../../../pipes/weekend-dates/weekend-dates.module";


@NgModule({
  declarations: [ScheduleItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    WeekendDatesModule
  ],
  exports: [ScheduleItemComponent]
})
export class ScheduleItemModule {
}
