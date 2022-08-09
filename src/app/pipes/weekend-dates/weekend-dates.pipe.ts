import {Pipe, PipeTransform} from '@angular/core';
import {IWeekendSchedule} from '../../interfaces/iweekend-schedule';
import sessionTimeToDate from '../../helpers/session-time-to-date';

@Pipe({
  name: 'weekendDates',
})
export class WeekendDatesPipe implements PipeTransform {
  transform(value: IWeekendSchedule): unknown {
    const fp1 = sessionTimeToDate(value.firstPractice);
    const race = new Date(`${value.date}T${value.time}`);

    return `${fp1.toLocaleString('en-US', {
      month: 'short',
    })} ${fp1.toLocaleString('en-US', { day: '2-digit' })} - ${
      fp1.getMonth() !== race.getMonth()
        ? race.toLocaleString('en-US', { month: 'short' })
        : ''
    } ${race.toLocaleString('en-US', { day: '2-digit' })}`;
  }
}
