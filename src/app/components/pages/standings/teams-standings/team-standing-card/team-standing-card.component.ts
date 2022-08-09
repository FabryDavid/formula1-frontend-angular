import {Component, Input, OnInit} from '@angular/core';
import {IConstructor} from "../../../../../interfaces/iconstructor";
import {TeamService} from "../../../../../services/team-service/team.service";
import {SafeUrl} from "@angular/platform-browser";
import getConstructorNameSecondPart from "../../../../../helpers/get-constructor-name-second-part";

@Component({
  selector: 'app-team-standing-card',
  templateUrl: './team-standing-card.component.html',
  styleUrls: ['./team-standing-card.component.scss']
})
export class TeamStandingCardComponent implements OnInit {
  @Input() team!: IConstructor
  teamLogo: SafeUrl | string = ""
  getConstructorNameSecondPart = getConstructorNameSecondPart

  constructor(private teamService: TeamService) {
  }

  ngOnInit(): void {
    this.teamService.getTeamLogo(this.team.team.constructorId).subscribe((data) => {
      this.teamLogo = data
    })
  }

}
