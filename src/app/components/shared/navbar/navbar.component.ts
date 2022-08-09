import {Component, HostListener, OnInit} from '@angular/core';
import {INavigationLink} from '../../../interfaces/inavigation-link';
import {NavbarServiceService} from '../../../services/navbar-service/navbar-service.service';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isElevated = false;
  drawerValue = false;
  navLinks: Array<INavigationLink> = [
    {text: 'Schedule', url: 'schedule'},
    {text: 'News', url: 'news'},
    {text: 'Drivers', url: 'drivers'},
    {text: 'Constructors', url: 'constructors'},
    {text: 'Standings', url: 'standings'},
  ];
  faArrowLeft = faArrowLeft;
  NavbarService = NavbarServiceService;

  get drawer() {
    return this.drawerValue
  }

  set drawer(value) {
    document.body.setAttribute('style', value ? `overflow: hidden;` : '')

    this.drawerValue = value
  }

  constructor(public navbarService: NavbarServiceService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.drawer = false
      }
    })
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.isElevated =
      document.body.scrollTop > 80 || document.documentElement.scrollTop > 80;
  }
}
