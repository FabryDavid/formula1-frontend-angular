import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartComponent} from "ng-apexcharts";
import {ISessionResult} from "../../../../../../interfaces/isession-result";
import {IChartOptions} from "../../../../../../interfaces/ichart-options";
import resultsChartBase from "../../../../../../helpers/results-chart-base";

@Component({
  selector: 'app-session-results-chart',
  templateUrl: './session-results-chart.component.html',
  styleUrls: ['./session-results-chart.component.scss']
})
export class SessionResultsChartComponent implements OnInit {
  @Input() results!: Array<ISessionResult>

  @ViewChild("chart") chart!: ChartComponent
  public chartOptions!: IChartOptions;

  constructor() {
    this.chartOptions = resultsChartBase
  }

  ngOnInit(): void {
    const seriesValues: Array<number> = [];
    const categories: Array<string> = [];
    const colors: Array<string> = [];
    this.results.forEach((result) => {
      seriesValues.push(result.lapTimeDeltaBase);
      categories.push(result.driverCode);
      colors.push(result.color === "#ffffff" ? "#d4d4d4" : result.color);
    });

    this.chartOptions.series = [
      {
        name: "Result",
        data: seriesValues,
      },
    ];

    const sessionResults = this.results;
    this.chartOptions.xaxis = {
      categories: categories
    }

    this.chartOptions.tooltip = {
      enabled: true,
      x: {
        show: true,
        formatter: function (val, opts) {
          const result = sessionResults[opts.dataPointIndex];
          return `${result.fullName}`;
        },
      },
      y: {
        formatter: function (val, opts) {
          const result = sessionResults[opts.dataPointIndex];
          return `${result.lapTime.toStringFormatted(true)}`;
        },
      },
    }

    this.chartOptions.colors = colors
  }
}
