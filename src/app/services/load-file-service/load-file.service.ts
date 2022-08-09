import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import handleError from "../../helpers/service-handle-error";

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
      catchError(handleError.bind(this))
    );
  }
}
