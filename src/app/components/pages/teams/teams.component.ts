import {Component, OnInit} from '@angular/core';
import {TeamService} from "../../../services/team-service/team.service";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  isLoading = false

  constructor(private teamService: TeamService) {
  }

  ngOnInit(): void {
    this.teamService.getConstructors().subscribe((data) => {
      console.log(data)
    })
  }

}
