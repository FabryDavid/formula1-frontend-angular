import { Component, Input, OnInit } from '@angular/core';
import { IConstructor } from '../../../../interfaces/iconstructor';
import { TeamService } from '../../../../services/team-service/team.service';
import getConstructorNameSecondPart from '../../../../helpers/get-constructor-name-second-part';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss'],
})
export class TeamCardComponent implements OnInit {
  @Input() team!: IConstructor;

  carImage: SafeUrl | string = 'assets/images/cars/no-car-image.png';

  getConstructorNameSecondPart = getConstructorNameSecondPart;

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService
      .getCarImage(this.team.team.constructorId)
      .subscribe((data) => {
        this.carImage = data;
      });
  }
}
