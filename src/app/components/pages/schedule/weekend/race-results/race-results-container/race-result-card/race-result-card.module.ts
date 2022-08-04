import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RaceResultCardComponent} from './race-result-card.component';


@NgModule({
  declarations: [
    RaceResultCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [RaceResultCardComponent]
})
export class RaceResultCardModule {
}
