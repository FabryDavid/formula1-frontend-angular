import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeekendDatesPipe} from "./weekend-dates.pipe";


@NgModule({
  declarations: [WeekendDatesPipe],
  imports: [
    CommonModule
  ],
  exports: [WeekendDatesPipe]
})
export class WeekendDatesModule {
}
