import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverDetailsRoutingModule } from './driver-details-routing.module';
import { DriverDetailsComponent } from './driver-details.component';
import {LoadingModule} from "../../../shared/page-loading-indicator/loading/loading.module";
import {DriverBackgroundModule} from "./driver-background/driver-background.module";


@NgModule({
  declarations: [
    DriverDetailsComponent
  ],
  imports: [
    CommonModule,
    DriverDetailsRoutingModule,
    LoadingModule,
    DriverBackgroundModule
  ]
})
export class DriverDetailsModule { }
