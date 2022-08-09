import {Component, OnInit} from '@angular/core';
import {TeamService} from "../../../../services/team-service/team.service";
import {IConstructor} from "../../../../interfaces/iconstructor";

@Component({
  selector: 'app-teams-standings',
  templateUrl: './teams-standings.component.html',
  styleUrls: ['./teams-standings.component.scss']
})
export class TeamsStandingsComponent implements OnInit {
  isLoading = false
  teams: Array<IConstructor> = []

  constructor(private teamsService: TeamService) {
  }

  ngOnInit(): void {
    this.isLoading = true
    this.teamsService.getConstructors().subscribe((data) => {
      this.teams = data
      this.isLoading = false
    })
  }

}
