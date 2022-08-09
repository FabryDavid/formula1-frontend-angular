import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamStandingCardComponent} from './team-standing-card.component';
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [
        TeamStandingCardComponent
    ],
    exports: [
        TeamStandingCardComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TeamStandingCardModule { }
