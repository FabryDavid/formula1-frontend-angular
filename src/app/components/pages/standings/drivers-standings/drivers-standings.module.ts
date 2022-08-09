import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DriversStandingsComponent} from './drivers-standings.component';
import {DriversStandingCardModule} from "./drivers-standing-card/drivers-standing-card.module";
import {LoadingModule} from "../../../shared/page-loading-indicator/loading/loading.module";


@NgModule({
    declarations: [
        DriversStandingsComponent
    ],
    exports: [
        DriversStandingsComponent
    ],
    imports: [
        CommonModule,
        DriversStandingCardModule,
        LoadingModule
    ]
})
export class DriversStandingsModule { }
