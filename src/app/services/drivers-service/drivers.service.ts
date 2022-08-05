import {Injectable} from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {catchError, map} from "rxjs/operators";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Session} from "../../enums/session";
import {environment} from "../../../environments/environment";
import {ISessionDriver} from "../../interfaces/isession-driver";
import {IDriver} from "../../interfaces/idriver";

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
  }

  getDriverImage(driverId: string): Observable<SafeUrl | string> {
    const filePath = `assets/images/drivers/2022/${driverId}.png`
    return this.http
      .get(filePath, {observe: 'response', responseType: 'blob'})
      .pipe(
        map(response => {
          const blob = response.body
          const objectURL = URL.createObjectURL(blob);
          return this.sanitizer.bypassSecurityTrustUrl(objectURL);
        }),
        catchError(error => {
          return of("assets/images/drivers/no-driver-image.png");
        })
      );
  }

  getSessionDrivers(gp: number | string, session: Session): Observable<Array<ISessionDriver>> {
    return this.http.get<Array<ISessionDriver>>(`${environment.apiUrl}/session-drivers/${gp}/${session}/2022`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError.bind(this))
    )
  }

  getDrivers(): Observable<Array<IDriver>> {
    return this.http.get<Array<any>>(`${environment.apiUrl}/drivers-standing`).pipe(
      map((response: Array<any>) => {
        const drivers: Array<IDriver> = response.map((x) => {
          const d: IDriver = {
            teams: {
              team: {
                constructorId: x.Constructors.Constructor.constructorId,
                name: x.Constructors.Constructor.name,
                nationality: x.Constructors.Constructor.nationality,
                url: x.Constructors.Constructor.url,
              },
              color: {
                primary: x.Constructors.color.primary,
                secondary: x.Constructors.color.secondary,
                tertiary: x.Constructors.color.tertiary,
              },
              drivers: x.Constructors.drivers,
              nameExtended: {
                fullName: x.Constructors.nameExtended.fullName,
                shortName: x.Constructors.nameExtended.shortName,
              },
              points: parseFloat(x.Constructors.points),
              position: parseInt(x.Constructors.position),
              positionText: x.Constructors.positionText,
              wins: parseInt(x.Constructors.wins),
            },
            driver: {
              code: x.Driver.code,
              dateOfBirth: x.Driver.dateOfBirth,
              driverId: x.Driver.driverId,
              familyName: x.Driver.familyName,
              givenName: x.Driver.givenName,
              nationality: x.Driver.nationality,
              permanentNumber: x.Driver.permanentNumber,
              url: x.Driver.url,
            },
            points: parseFloat(x.points),
            position: parseFloat(x.position),
            positionText: x.points,
            wins: parseFloat(x.wins),
          }

          return d
        })

        return drivers;
      }),
      catchError(this.handleError.bind(this))
    )
  }

  public handleError(
    err: HttpErrorResponse,
    caught: Observable<any>
  ): Observable<any> {
    return throwError(err);
  }
}
