import {Component, HostListener, OnInit} from '@angular/core';
import {INavigationLink} from "../../../interfaces/inavigation-link";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isElevated = false
  drawer = false
  navLinks:Array<INavigationLink> = [
    {text:"Schedule",url:"schedule"},
    {text:"News",url:"news"},
    {text:"Drivers",url:"drivers"},
    {text:"Constructors",url:"constructors"},
    {text:"Standings",url:"standings"},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isElevated = document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
  }
}
