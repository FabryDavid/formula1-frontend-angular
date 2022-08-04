import {Injectable} from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {catchError, map} from "rxjs/operators";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Session} from "../../enums/session";
import {environment} from "../../../environments/environment";
import {ISessionDriver} from "../../interfaces/isession-driver";

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

  public handleError(
    err: HttpErrorResponse,
    caught: Observable<any>
  ): Observable<any> {
    return throwError(err);
  }
}
