import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class DriverImageService {

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
}
