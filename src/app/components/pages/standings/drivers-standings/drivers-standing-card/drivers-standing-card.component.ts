import {Component, Input, OnInit} from '@angular/core';
import {IDriver} from "../../../../../interfaces/idriver";
import getNumberTextSuffix from "../../../../../helpers/get-number-text-suffix";
import {SafeUrl} from "@angular/platform-browser";
import {DriversService} from "../../../../../services/drivers-service/drivers.service";

@Component({
  selector: 'app-drivers-standing-card',
  templateUrl: './drivers-standing-card.component.html',
  styleUrls: ['./drivers-standing-card.component.scss']
})
export class DriversStandingCardComponent implements OnInit {
  @Input() driver!: IDriver

  getNumberTextSuffix = getNumberTextSuffix
  driverImage: SafeUrl | string = "assets/images/drivers/no-driver-image.png"

  constructor(private driverService: DriversService) {
  }

  ngOnInit(): void {
    this.driverService.getDriverImage(this.driver.driver.driverId).subscribe((data) => {
      this.driverImage = data
    })
  }

}
