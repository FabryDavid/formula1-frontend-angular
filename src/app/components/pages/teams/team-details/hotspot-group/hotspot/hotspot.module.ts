import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotspotComponent } from './hotspot.component';

@NgModule({
  declarations: [HotspotComponent],
  exports: [HotspotComponent],
  imports: [CommonModule],
})
export class HotspotModule {}
