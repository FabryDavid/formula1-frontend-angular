import {Injectable} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
  }
}
