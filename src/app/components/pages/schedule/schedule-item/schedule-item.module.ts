import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScheduleItemComponent} from './schedule-item.component';
import {RouterModule} from '@angular/router';
import {WeekendDatesModule} from '../../../../pipes/weekend-dates/weekend-dates.module';
import {FlagContainerModule} from '../../../shared/flag/flag-container/flag-container.module';

@NgModule({
  declarations: [ScheduleItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    WeekendDatesModule,
    FlagContainerModule,
  ],
  exports: [ScheduleItemComponent],
})
export class ScheduleItemModule {}
