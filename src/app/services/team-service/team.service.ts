import {Injectable} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, of, throwError} from "rxjs";
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
          return response.map((x) => {
            return ServerResponseConverter.team(x);
          });
        }),
        catchError(this.handleError.bind(this))
      );
  }

  getCarImage(constructorId: string): Observable<SafeUrl | string> {
    const filePath = `assets/images/cars/${constructorId}.png`;
    return this.http
      .get(filePath, {observe: 'response', responseType: 'blob'})
      .pipe(
        map((response) => {
          const blob = response.body;
          const objectURL = URL.createObjectURL(blob);
          return this.sanitizer.bypassSecurityTrustUrl(objectURL);
        }),
        catchError((error) => {
          return of('assets/images/cars/no-car-image.png');
        })
      );
  }

  public handleError(
    err: HttpErrorResponse,
    caught: Observable<any>
  ): Observable<any> {
    return throwError(err);
  }
}
