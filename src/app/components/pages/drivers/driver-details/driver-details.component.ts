import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DriversService} from "../../../../services/drivers-service/drivers.service";
import {IDriver} from "../../../../interfaces/idriver";
import {SafeUrl} from "@angular/platform-browser";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.scss']
})
export class DriverDetailsComponent implements OnInit {
  private sub: any;
  isLoading = false
  driverId!: string
  driver!: IDriver
  driverImagePath: SafeUrl | string = ""

  get driverInfos() {
    return this.driver.driver
  }

  get constructorInfos() {
    return this.driver.teams
  }

  constructor(private route: ActivatedRoute, private driverService: DriversService) {
  }

  ngOnInit(): void {
    this.isLoading = true
    this.sub = this.route.params.subscribe(params => {
      this.driverId = params['driverId'];

      forkJoin({
        driver: this.driverService.getDriverDetails(this.driverId),
        driverImage: this.driverService.getDriverImage(this.driverId)
      }).subscribe((data) => {
        this.driver = data.driver
        this.driverImagePath = data.driverImage

        this.isLoading = false
      })
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
