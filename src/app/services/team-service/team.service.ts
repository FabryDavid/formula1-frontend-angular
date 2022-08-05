import {Injectable} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {IConstructor} from "../../interfaces/iconstructor";
import {ServerResponseConverter} from "../../classes/server-response-converter/server-response-converter";

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
  }

  getConstructors(): Observable<Array<IConstructor>> {
    return this.http
      .get<Array<any>>(`${environment.apiUrl}/constructors-standing`)
      .pipe(
        map((response: Array<any>) => {
          const drivers: Array<IConstructor> = response.map((x) => {
            return ServerResponseConverter.(x);
          });

          return response;
        }),
        catchError(this.handleError.bind(this))
      );
  }

  public handleError(
    err: HttpErrorResponse,
    caught: Observable<any>
  ): Observable<any> {
    return throwError(err);
  }
}
