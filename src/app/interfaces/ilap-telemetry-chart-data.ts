import { ApexAxisChartSeries } from 'ng-apexcharts';

export interface ILapTelemetryChartData {
  speedSeries: ApexAxisChartSeries;
  driverAheadSeries: ApexAxisChartSeries;
  driverAheadNameSeries: ApexAxisChartSeries;
  throttleSeries: ApexAxisChartSeries;
  brakeSeries: ApexAxisChartSeries;
  rpmSeries: ApexAxisChartSeries;
  gearSeries: ApexAxisChartSeries;
  drsSeries: ApexAxisChartSeries;
  colors: Array<string>;
  categories: Array<number>;
}
