import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {ITweetsResponse} from "../interfaces/itweets-response";

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http: HttpClient) {
  }

  getNews(): Observable<ITweetsResponse> {
    return this.http.get<ITweetsResponse>(`${environment.apiUrl}/get-tweets`).pipe(
      map((response: ITweetsResponse) => {
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
