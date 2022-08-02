import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CircuitInfosComponent} from "./circuit-infos.component";


@NgModule({
  declarations: [CircuitInfosComponent],
  imports: [
    CommonModule
  ],
  exports: [CircuitInfosComponent]
})
export class CircuitInfosModule {
}
