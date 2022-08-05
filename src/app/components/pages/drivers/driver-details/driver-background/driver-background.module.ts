import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverBackgroundComponent } from './driver-background.component';

@NgModule({
  declarations: [DriverBackgroundComponent],
  exports: [DriverBackgroundComponent],
  imports: [CommonModule],
})
export class DriverBackgroundModule {}
