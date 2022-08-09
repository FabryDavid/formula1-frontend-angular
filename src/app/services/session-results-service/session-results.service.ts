import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Session } from '../../enums/session';
import { ISessionResult } from '../../interfaces/isession-result';
import { ServerResponseConverter } from '../../classes/server-response-converter/server-response-converter';
import handleError from '../../helpers/service-handle-error';

@Injectable({
  providedIn: 'root',
})
export class SessionResultsService {
  constructor(private http: HttpClient) {}

  getSessionResults(
    gp: number | string,
    session: Session
  ): Observable<Array<ISessionResult>> {
    return this.http
      .get<any>(`${environment.apiUrl}/session-results/${gp}/${session}/2022`)
      .pipe(
        map((data) => {
          if (data.length === 0) {
            return [];
          }

          return ServerResponseConverter.sessionResult(data);
        }, catchError(handleError.bind(this)))
      );
  }
}
