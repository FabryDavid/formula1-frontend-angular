import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {IWeekendSchedule} from "../../interfaces/iweekend-schedule";

@Injectable({
  providedIn: 'root'
})
export class ScheduleServiceService {

  constructor(private http: HttpClient) {
  }

  getUpcomingSession(): Observable<IWeekendSchedule> {
    return this.http.get<IWeekendSchedule>(`${environment.apiUrl}/upcoming-race`).pipe(
      map((response: IWeekendSchedule) => {
        return response;
      }),
      catchError(this.handleError.bind(this))
    )
  }

  getCurrentSchedule(): Observable<Array<IWeekendSchedule>> {
    return this.http.get<Array<IWeekendSchedule>>(`${environment.apiUrl}/current-schedule`).pipe(
      map((response => {
          return response
        }),
        catchError(this.handleError.bind(this))
      )
    )
  }

  getScheduledRoundInformation(round: number): Observable<IWeekendSchedule> {
    return this.http.get<IWeekendSchedule>(`${environment.apiUrl}/schedule/${round}`).pipe(
      map((response => {
          return response
        }),
        catchError(this.handleError.bind(this))
      )
    )
  }

  public handleError(
    err: HttpErrorResponse,
    caught: Observable<any>
  ): Observable<any> {
    return throwError(err);
  }
}
