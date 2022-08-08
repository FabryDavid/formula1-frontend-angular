import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import {LoadingModule} from "../../shared/page-loading-indicator/loading/loading.module";
import {TeamCardModule} from "./team-card/team-card.module";


@NgModule({
  declarations: [
    TeamsComponent
  ],
    imports: [
        CommonModule,
        TeamsRoutingModule,
        LoadingModule,
        TeamCardModule
    ]
})
export class TeamsModule { }
