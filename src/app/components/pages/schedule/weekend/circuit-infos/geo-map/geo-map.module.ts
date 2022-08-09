import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeoMapComponent} from './geo-map.component';

@NgModule({
  declarations: [GeoMapComponent],
  imports: [CommonModule],
  exports: [GeoMapComponent],
})
export class GeoMapModule {}
