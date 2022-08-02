import {Component, Input, OnInit} from '@angular/core';
import {ISectorTime} from "../../../../../../interfaces/isector-time";

@Component({
  selector: 'app-sector-time',
  templateUrl: './sector-time.component.html',
  styleUrls: ['./sector-time.component.scss']
})
export class SectorTimeComponent implements OnInit {
  @Input() sectorTime: ISectorTime | undefined = undefined
  @Input() sectorNumber: 1 | 2 | 3 = 1
  @Input() isLoading: boolean = false

  get sessionName() {
    if (!this.sectorTime) {
      return ""
    }

    switch (this.sectorTime.sessionName) {
      case "Q":
        return "Qualifying";
      case "R":
        return "Race";
      default:
        return this.sectorTime.sessionName;
    }
  }

  get sectorTitle() {
    return this.isLoading || !this.sectorTime ? `Sector ${this.sectorNumber}` : this.sectorTime.driver
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
