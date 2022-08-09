import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TelemetryPanelComponent} from './telemetry-panel.component';

@NgModule({
  declarations: [TelemetryPanelComponent],
  imports: [CommonModule],
  exports: [TelemetryPanelComponent],
})
export class TelemetryPanelModule {}
