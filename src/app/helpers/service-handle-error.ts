import {HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";

export default function handleError(
  err: HttpErrorResponse,
  caught: Observable<any>
): Observable<any> {
  return throwError(err);
}
