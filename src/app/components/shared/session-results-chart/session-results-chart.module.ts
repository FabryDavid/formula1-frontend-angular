import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionResultsChartComponent } from './session-results-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [SessionResultsChartComponent],
  imports: [CommonModule, NgApexchartsModule],
  exports: [SessionResultsChartComponent],
})
export class SessionResultsChartModule {}
