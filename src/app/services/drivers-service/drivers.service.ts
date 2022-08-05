import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Session } from '../../enums/session';
import { environment } from '../../../environments/environment';
import { ISessionDriver } from '../../interfaces/isession-driver';
import { IDriver } from '../../interfaces/idriver';
import { ServerResponseConverter } from '../../classes/server-response-converter/server-response-converter';

@Injectable({
  providedIn: 'root',
})
export class DriversService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  getDriverImage(driverId: string): Observable<SafeUrl | string> {
    const filePath = `assets/images/drivers/2022/${driverId}.png`;
    return this.http
      .get(filePath, { observe: 'response', responseType: 'blob' })
      .pipe(
        map((response) => {
          const blob = response.body;
          const objectURL = URL.createObjectURL(blob);
          return this.sanitizer.bypassSecurityTrustUrl(objectURL);
        }),
        catchError((error) => {
          return of('assets/images/drivers/no-driver-image.png');
        })
      );
  }

  getSessionDrivers(
    gp: number | string,
    session: Session
  ): Observable<Array<ISessionDriver>> {
    return this.http
      .get<Array<ISessionDriver>>(
        `${environment.apiUrl}/session-drivers/${gp}/${session}/2022`
      )
      .pipe(
        map((response: any) => {
          response.sort((a: ISessionDriver, b: ISessionDriver) => {
            const aTeam = a.team;
            const bTeam = b.team;

            if (aTeam === bTeam) {
              const aName = a.fullName;
              const bName = b.fullName;

              return aName > bName ? 1 : -1;
            }

            return aTeam > bTeam ? 1 : -1;
          });

          return response;
        }),
        catchError(this.handleError.bind(this))
      );
  }

  getDrivers(): Observable<Array<IDriver>> {
    return this.http
      .get<Array<any>>(`${environment.apiUrl}/drivers-standing`)
      .pipe(
        map((response: Array<any>) => {
          const drivers: Array<IDriver> = response.map((x) => {
            return ServerResponseConverter.driver(x);
          });

          return drivers;
        }),
        catchError(this.handleError.bind(this))
      );
  }

  getDriverDetails(driverId: string): Observable<any> {
    return this.http
      .get<Array<any>>(`${environment.apiUrl}/driver/${driverId}`)
      .pipe(
        map((response: any) => {
          return ServerResponseConverter.driver(response);
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
