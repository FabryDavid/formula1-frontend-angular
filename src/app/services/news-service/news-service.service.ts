import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { ITweetsResponse } from '../../interfaces/itweets-response';
import { ServerResponseConverter } from '../../classes/server-response-converter/server-response-converter';

@Injectable({
  providedIn: 'root',
})
export class NewsServiceService {
  constructor(private http: HttpClient) {}

  getNews(
    tweetsCount: number = 10,
    token: string | null = null
  ): Observable<ITweetsResponse> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('limit', tweetsCount);

    if (token) {
      queryParams = queryParams.append('token', token);
    }

    return this.http
      .get<ITweetsResponse>(`${environment.apiUrl}/get-tweets`, {
        params: queryParams,
      })
      .pipe(
        map((response: ITweetsResponse) => {
          return ServerResponseConverter.tweetResponse(response);
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
