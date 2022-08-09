import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FullSessionChartComponent} from './full-session-chart.component';
import {NgApexchartsModule} from 'ng-apexcharts';

@NgModule({
  declarations: [FullSessionChartComponent],
  imports: [CommonModule, NgApexchartsModule],
  exports: [FullSessionChartComponent],
})
export class FullSessionChartModule {}
