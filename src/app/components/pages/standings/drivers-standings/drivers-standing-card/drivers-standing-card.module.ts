import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DriversStandingCardComponent} from './drivers-standing-card.component';
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [
        DriversStandingCardComponent
    ],
    exports: [
        DriversStandingCardComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DriversStandingCardModule { }
