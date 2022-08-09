import {Injectable} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {IConstructor} from '../../interfaces/iconstructor';
import {ServerResponseConverter} from '../../classes/server-response-converter/server-response-converter';
import handleError from "../../helpers/service-handle-error";

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  public static noCarImagePath = 'assets/images/cars/no-car-image.png'

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
        catchError(handleError.bind(this))
      );
  }

  getConstructorDetails(constructorId: string): Observable<IConstructor> {
    return this.http
      .get<any>(`${environment.apiUrl}/constructor/${constructorId}`)
      .pipe(
        map((response) => {
          return ServerResponseConverter.team(response);
        }),
        catchError(handleError.bind(this))
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
        catchError(() => {
          return of(TeamService.noCarImagePath);
        })
      );
  }

  getTeamLogo(constructorId: string): Observable<SafeUrl | string> {
    const filePath = `assets/images/logos/${constructorId}.svg`;
    return this.http
      .get(filePath, {observe: 'response', responseType: 'blob'})
      .pipe(
        map((response) => {
          const blob = response.body;
          const objectURL = URL.createObjectURL(blob);
          return this.sanitizer.bypassSecurityTrustUrl(objectURL);
        }),
        catchError(() => {
          return of('');
        })
      );
  }
}
