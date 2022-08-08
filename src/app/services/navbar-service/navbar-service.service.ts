import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavbarServiceService {
  private backButtonSource = new Subject<string>();

  backAnnounced$ = this.backButtonSource.asObservable();
  static show = false;

  back() {
    this.backButtonSource.next();
  }

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        NavbarServiceService.show = false;
      }
    });
  }
}
