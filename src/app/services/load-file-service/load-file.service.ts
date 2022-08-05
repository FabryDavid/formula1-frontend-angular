import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadFileService {
  constructor(private http: HttpClient) {}

  getFile(path: string): any {
    return this.http.get<any>(path).pipe(
      map((response) => {
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
