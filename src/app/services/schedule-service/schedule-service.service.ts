import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IWeekendSchedule } from '../../interfaces/iweekend-schedule';
import { ServerResponseConverter } from '../../classes/server-response-converter/server-response-converter';
import handleError from "../../helpers/service-handle-error";

@Injectable({
  providedIn: 'root',
})
export class ScheduleServiceService {
  constructor(private http: HttpClient) {}

  getUpcomingSession(): Observable<IWeekendSchedule> {
    return this.http
      .get<IWeekendSchedule>(`${environment.apiUrl}/upcoming-race`)
      .pipe(
        map((response: any) => {
          return ServerResponseConverter.weekendSchedule(response);
        }),
        catchError(handleError.bind(this))
      );
  }

  getCurrentSchedule(): Observable<Array<IWeekendSchedule>> {
    return this.http
      .get<Array<any>>(`${environment.apiUrl}/current-schedule`)
      .pipe(
        map((response) => {
          const schedule: Array<IWeekendSchedule> = [];

          response.forEach((s) => {
            schedule.push(ServerResponseConverter.weekendSchedule(s));
          });

          return schedule;
        }, catchError(handleError.bind(this)))
      );
  }

  getScheduledRoundInformation(round: number): Observable<IWeekendSchedule> {
    return this.http.get<any>(`${environment.apiUrl}/schedule/${round}`).pipe(
      map((response) => {
        return ServerResponseConverter.weekendSchedule(response);
      }, catchError(handleError.bind(this)))
    );
  }
}
