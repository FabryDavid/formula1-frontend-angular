import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RaceResultsComponent} from './race-results.component';


@NgModule({
  declarations: [
    RaceResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [RaceResultsComponent]
})
export class RaceResultsModule {
}
