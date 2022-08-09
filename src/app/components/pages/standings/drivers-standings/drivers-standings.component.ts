import { Component, OnInit } from '@angular/core';
import { DriversService } from '../../../../services/drivers-service/drivers.service';
import { IDriver } from '../../../../interfaces/idriver';

@Component({
  selector: 'app-drivers-standings',
  templateUrl: './drivers-standings.component.html',
  styleUrls: ['./drivers-standings.component.scss'],
})
export class DriversStandingsComponent implements OnInit {
  isLoading = false;
  drivers: Array<IDriver> = [];

  constructor(private driversService: DriversService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.driversService.getDrivers().subscribe((data) => {
      this.drivers = data;
      this.isLoading = false;
    });
  }
}
