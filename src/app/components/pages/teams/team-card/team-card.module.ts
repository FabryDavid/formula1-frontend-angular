import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamCardComponent } from './team-card.component';
import {RouterModule} from "@angular/router";
import {CardBackgroundModule} from "../../../shared/card-background/card-background.module";



@NgModule({
    declarations: [
        TeamCardComponent
    ],
    exports: [
        TeamCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        CardBackgroundModule
    ]
})
export class TeamCardModule { }
