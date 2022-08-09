import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpeedAndGearshiftMapComponent} from './speed-and-gearshift-map.component';
import {DriverLapSelectModule} from '../driver-lap-select/driver-lap-select.module';
import {LoadingModule} from '../page-loading-indicator/loading/loading.module';

@NgModule({
  declarations: [SpeedAndGearshiftMapComponent],
  imports: [CommonModule, DriverLapSelectModule, LoadingModule],
  exports: [SpeedAndGearshiftMapComponent],
})
export class SpeedAndGearshiftMapModule {}
