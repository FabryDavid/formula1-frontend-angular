import {Component, OnInit} from '@angular/core';
import {TeamService} from "../../../services/team-service/team.service";
import {IConstructor} from "../../../interfaces/iconstructor";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  isLoading = false
  teams: Array<IConstructor> = []

  constructor(private teamService: TeamService) {
  }

  ngOnInit(): void {
    this.isLoading = true
    this.teamService.getConstructors().subscribe((data) => {
      this.teams = data
      this.isLoading = false
    })
  }

}
