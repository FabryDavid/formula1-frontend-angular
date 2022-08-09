import { Component, Input, OnInit } from '@angular/core';
import { IRaceResult } from '../../../../interfaces/irace-result';
import getNumberTextSuffix from '../../../../helpers/get-number-text-suffix';
import {
  faMinus,
  faSortDown,
  faSortUp,
} from '@fortawesome/free-solid-svg-icons';
import { DriversService } from '../../../../services/drivers-service/drivers.service';

@Component({
  selector: 'app-race-result-card',
  templateUrl: './race-result-card.component.html',
  styleUrls: ['./race-result-card.component.scss'],
})
export class RaceResultCardComponent implements OnInit {
  @Input() result!: IRaceResult;

  isExpanded = false;
  driverImage: any = null;
  getNumberTextSuffix = getNumberTextSuffix;
  driverFullName!: string;
  positionFromStart!: number;
  gainedPositionsAbs!: number;
  faSortUp = faSortUp;
  faSortDown = faSortDown;
  faMinus = faMinus;
  isFinished = true;

  constructor(private driversService: DriversService) {}

  ngOnInit(): void {
    this.driverFullName = `${this.result.driver.driver.givenName} ${this.result.driver.driver.familyName}`;
    this.positionFromStart = this.result.grid - this.result.position;
    this.gainedPositionsAbs = Math.abs(this.positionFromStart);

    const finishedRegex = /(\+\d{0,5} lap)|finished/gm;
    this.isFinished = finishedRegex.test(this.result.status.toLowerCase());

    this.driversService
      .getDriverImage(this.result.driver.driver.driverId)
      .subscribe((data) => {
        this.driverImage = data;
      });
  }
}
