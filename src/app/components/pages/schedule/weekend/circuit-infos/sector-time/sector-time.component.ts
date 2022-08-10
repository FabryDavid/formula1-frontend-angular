import { Component, Input, OnInit } from '@angular/core';
import { ISectorTime } from '../../../../../../interfaces/isector-time';

@Component({
  selector: 'app-sector-time',
  templateUrl: './sector-time.component.html',
  styleUrls: ['./sector-time.component.scss'],
})
export class SectorTimeComponent implements OnInit {
  @Input() sectorTime: ISectorTime | undefined = undefined;
  @Input() sectorNumber: 1 | 2 | 3 = 1;
  @Input() isLoading: boolean = false;
  @Input() error?: string | null = null;

  get sessionName() {
    if (!this.sectorTime) {
      return '';
    }

    switch (this.sectorTime.sessionName) {
      case 'Q':
        return 'Qualifying';
      case 'R':
        return 'Race';
      default:
        return this.sectorTime.sessionName;
    }
  }

  get sectorTitle() {
    return this.isLoading || !this.sectorTime
      ? `Sector ${this.sectorNumber}`
      : this.sectorTime.driver;
  }

  get progressBarColor() {
    switch (this.sectorNumber) {
      case 1:
        return 'primary';
      case 2:
        return 'accent';
      default:
        return 'warn';
    }
  }

  get text() {
    if (this.error) {
      return this.error;
    }

    if (this.isLoading || !this.sectorTime) {
      return 'Loading';
    }

    return this.sectorTime.time;
  }

  constructor() {}

  ngOnInit(): void {}
}
