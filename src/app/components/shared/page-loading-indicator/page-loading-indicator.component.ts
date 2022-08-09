import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-loading-indicator',
  templateUrl: './page-loading-indicator.component.html',
  styleUrls: ['./page-loading-indicator.component.scss'],
})
export class PageLoadingIndicatorComponent implements OnInit {
  tire: null | string = null;

  constructor() {}

  ngOnInit(): void {
    const tires = ['hard', 'inter', 'medium', 'rain', 'soft'];
    this.tire = tires[Math.floor(Math.random() * tires.length)];
  }
}
