import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { IRaceResult } from '../../interfaces/irace-result';
import { ServerResponseConverter } from '../../classes/server-response-converter/server-response-converter';
import handleError from "../../helpers/service-handle-error";

@Injectable({
  providedIn: 'root',
})
export class RaceResultService {
  constructor(private http: HttpClient) {}

  getRaceResult(round: number): Observable<Array<IRaceResult>> {
    return this.http
      .get<any>(`${environment.apiUrl}/race-results/${round}/2022`)
      .pipe(
        map((data) => {
          return ServerResponseConverter.raceResult(data);
        }, catchError(handleError.bind(this)))
      );
  }
}
