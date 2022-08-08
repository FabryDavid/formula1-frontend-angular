import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamDetailsRoutingModule } from './team-details-routing.module';
import { TeamDetailsComponent } from './team-details.component';
import {LoadingModule} from "../../../shared/page-loading-indicator/loading/loading.module";
import {TeamDetailsBackgroundModule} from "./team-details-background/team-details-background.module";
import {HotspotGroupModule} from "./hotspot-group/hotspot-group.module";


@NgModule({
  declarations: [
    TeamDetailsComponent
  ],
    imports: [
        CommonModule,
        TeamDetailsRoutingModule,
        LoadingModule,
        TeamDetailsBackgroundModule,
        HotspotGroupModule
    ]
})
export class TeamDetailsModule { }
