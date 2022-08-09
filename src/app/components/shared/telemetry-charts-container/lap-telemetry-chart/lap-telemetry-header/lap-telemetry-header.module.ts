import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LapTelemetryHeaderComponent } from './lap-telemetry-header.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { LoadingModule } from '../../../page-loading-indicator/loading/loading.module';
import { DriverLapSelectModule } from '../../../driver-lap-select/driver-lap-select.module';

@NgModule({
  declarations: [LapTelemetryHeaderComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    LoadingModule,
    DriverLapSelectModule,
  ],
  exports: [LapTelemetryHeaderComponent],
})
export class LapTelemetryHeaderModule {}
