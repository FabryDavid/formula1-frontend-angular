import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CircuitInfosComponent} from "./circuit-infos.component";
import {SectorTimeModule} from "./sector-time/sector-time.module";


@NgModule({
  declarations: [CircuitInfosComponent],
  imports: [
    CommonModule,
    SectorTimeModule
  ],
  exports: [CircuitInfosComponent]
})
export class CircuitInfosModule {
}
