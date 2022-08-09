import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DriversRoutingModule} from './drivers-routing.module';
import {DriversComponent} from './drivers.component';
import {LoadingModule} from '../../shared/page-loading-indicator/loading/loading.module';
import {DriverCardModule} from './driver-card/driver-card.module';

@NgModule({
  declarations: [DriversComponent],
  imports: [
    CommonModule,
    DriversRoutingModule,
    LoadingModule,
    DriverCardModule,
  ],
})
export class DriversModule {}
