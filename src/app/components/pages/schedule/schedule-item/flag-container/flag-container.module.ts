import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlagContainerComponent} from "./flag-container.component";
import {ScheduleItemModule} from "../schedule-item.module";
import {FlagHostModule} from "../flag-host.module";


@NgModule({
  declarations: [FlagContainerComponent],
  imports: [
    CommonModule,
    ScheduleItemModule,
    FlagHostModule,
  ],
  exports: [FlagContainerComponent]
})
export class FlagContainerModule {
}
