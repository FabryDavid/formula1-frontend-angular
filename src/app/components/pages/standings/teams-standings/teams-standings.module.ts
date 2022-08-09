import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsStandingsComponent } from './teams-standings.component';
import {LoadingModule} from "../../../shared/page-loading-indicator/loading/loading.module";
import {TeamStandingCardModule} from "./team-standing-card/team-standing-card.module";



@NgModule({
    declarations: [
        TeamsStandingsComponent
    ],
    exports: [
        TeamsStandingsComponent
    ],
  imports: [
    CommonModule,
    LoadingModule,
    TeamStandingCardModule
  ]
})
export class TeamsStandingsModule { }
