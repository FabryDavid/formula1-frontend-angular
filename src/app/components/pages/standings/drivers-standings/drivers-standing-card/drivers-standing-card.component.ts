import {Component, Input, OnInit} from '@angular/core';
import {IDriver} from "../../../../../interfaces/idriver";
import {SafeUrl} from "@angular/platform-browser";
import {DriversService} from "../../../../../services/drivers-service/drivers.service";
import {TeamService} from "../../../../../services/team-service/team.service";

@Component({
  selector: 'app-drivers-standing-card',
  templateUrl: './drivers-standing-card.component.html',
  styleUrls: ['./drivers-standing-card.component.scss']
})
export class DriversStandingCardComponent implements OnInit {
  @Input() driver!: IDriver
  driverImage: SafeUrl | string = DriversService.noDriverImagePath
  teamLogo: SafeUrl | string = ""

  constructor(private driverService: DriversService, private teamService: TeamService) {
  }

  ngOnInit(): void {
    this.driverService.getDriverImage(this.driver.driver.driverId).subscribe((data) => {
      this.driverImage = data
    })

    this.teamService.getTeamLogo(this.driver.teams.team.constructorId).subscribe((data) => {
      this.teamLogo = data
    })
  }

}
