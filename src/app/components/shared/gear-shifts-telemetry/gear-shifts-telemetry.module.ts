import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GearShiftsTelemetryComponent} from './gear-shifts-telemetry.component';
import {DriverLapSelectModule} from "../driver-lap-select/driver-lap-select.module";
import {LoadingModule} from "../page-loading-indicator/loading/loading.module";


@NgModule({
  declarations: [
    GearShiftsTelemetryComponent
  ],
    imports: [
        CommonModule,
        DriverLapSelectModule,
        LoadingModule
    ],
  exports: [GearShiftsTelemetryComponent]
})
export class GearShiftsTelemetryModule {
}
