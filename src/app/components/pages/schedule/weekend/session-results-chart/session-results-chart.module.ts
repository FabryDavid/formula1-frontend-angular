import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SessionResultsChartComponent} from './session-results-chart.component';


@NgModule({
  declarations: [
    SessionResultsChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SessionResultsChartComponent]
})
export class SessionResultsChartModule {
}
