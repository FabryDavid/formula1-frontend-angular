import { Component, Input, OnInit } from '@angular/core';
import { ISessionResult } from '../../../../../../../interfaces/isession-result';
import getNumberTextSuffix from '../../../../../../../helpers/get-number-text-suffix';
import getTyreCompoundImage from '../../../../../../../helpers/get-tyre-compound-image';
import { DriversService } from '../../../../../../../services/drivers-service/drivers.service';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
})
export class ResultCardComponent implements OnInit {
  @Input() result!: ISessionResult;

  isExpanded = false;
  getNumberTextSuffix = getNumberTextSuffix;
  driverImage: any = DriversService.noDriverImagePath;
  tireImagePath: null | string = null;

  constructor(private driversService: DriversService) {}

  ngOnInit(): void {
    this.tireImagePath = getTyreCompoundImage(this.result.compound);

    this.driversService
      .getDriverImage(this.result.driverId)
      .subscribe((data) => {
        this.driverImage = data;
      });
  }
}
