import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpeedMapTelemetryComponent} from './speed-map-telemetry.component';
import {DriverLapSelectModule} from "../driver-lap-select/driver-lap-select.module";
import {LoadingModule} from "../page-loading-indicator/loading/loading.module";


@NgModule({
  declarations: [
    SpeedMapTelemetryComponent
  ],
  imports: [
    CommonModule,
    DriverLapSelectModule,
    LoadingModule
  ],
  exports: [SpeedMapTelemetryComponent]
})
export class SpeedMapTelemetryModule {
}
