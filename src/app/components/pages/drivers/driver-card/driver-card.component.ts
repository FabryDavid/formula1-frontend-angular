import { Component, Input, OnInit } from '@angular/core';
import { IDriver } from '../../../../interfaces/idriver';
import { DriversService } from '../../../../services/drivers-service/drivers.service';
import { SafeUrl } from '@angular/platform-browser';
import { TeamService } from '../../../../services/team-service/team.service';

@Component({
  selector: 'app-driver-card',
  templateUrl: './driver-card.component.html',
  styleUrls: ['./driver-card.component.scss'],
})
export class DriverCardComponent implements OnInit {
  @Input() driver!: IDriver;

  driverImage: SafeUrl | string = 'assets/images/drivers/no-driver-image.png';

  get constructorInfos() {
    return this.driver.teams;
  }

  get driverInfos() {
    return this.driver.driver;
  }

  constructor(private driverService: DriversService) {}

  ngOnInit(): void {
    this.driverService
      .getDriverImage(this.driver.driver.driverId)
      .subscribe((image) => {
        this.driverImage = image;
      });
  }
}
