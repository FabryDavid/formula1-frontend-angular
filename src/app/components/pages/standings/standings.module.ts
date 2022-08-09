import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandingsRoutingModule } from './standings-routing.module';
import { StandingsComponent } from './standings.component';
import {MatTabsModule} from "@angular/material/tabs";
import {DriversStandingsModule} from "./drivers-standings/drivers-standings.module";
import {TeamsStandingsModule} from "./teams-standings/teams-standings.module";


@NgModule({
  declarations: [
    StandingsComponent
  ],
    imports: [
        CommonModule,
        StandingsRoutingModule,
        MatTabsModule,
        DriversStandingsModule,
        TeamsStandingsModule
    ]
})
export class StandingsModule { }
