import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDetailsBackgroundComponent } from './team-details-background.component';



@NgModule({
    declarations: [
        TeamDetailsBackgroundComponent
    ],
    exports: [
        TeamDetailsBackgroundComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TeamDetailsBackgroundModule { }
