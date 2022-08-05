import {Component, OnInit} from '@angular/core';
import {DriversService} from "../../../services/drivers-service/drivers.service";
import {IDriver} from "../../../interfaces/idriver";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  isLoading = false
  driverGroups: Array<Array<IDriver>> = []

  constructor(private driversService: DriversService) {
  }

  ngOnInit(): void {
    this.isLoading = true
    this.driversService.getDrivers().subscribe((data) => {
      if (!data || data.length === 0) {
        this.driverGroups = [];
      } else {
        const groups = data.reduce(function (r, a) {
          r[a.teams.team.constructorId] = r[a.teams.team.constructorId] || [];
          r[a.teams.team.constructorId].push(a);
          return r;
        }, Object.create(null));

        this.driverGroups = Object.values(groups)
      }

      this.isLoading = false
    })
  }

}
