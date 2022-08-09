import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { ISectorTimes } from '../../interfaces/isector-times';
import handleError from "../../helpers/service-handle-error";

@Injectable({
  providedIn: 'root',
})
export class SessionTimeService {
  constructor(private http: HttpClient) {}

  getFastestSessionsInWeekend(round: number): Observable<ISectorTimes> {
    return this.http
      .get<ISectorTimes>(
        `${environment.apiUrl}/weekend-sector-times/${round}/2022`
      )
      .pipe(
        map((response) => {
          return response;
        }, catchError(handleError.bind(this)))
      );
  }
}
