import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartComponent} from "ng-apexcharts";
import {ISessionResult} from "../../../interfaces/isession-result";
import {IChartOptions} from "../../../interfaces/ichart-options";
import resultsChartBase from "../../../helpers/results-chart-base";
import {IRaceResult} from "../../../interfaces/irace-result";
import {Timing} from "../../../classes/timing/timing";
import mapTeamColor from "../../../helpers/mapTeamColor";

@Component({
  selector: 'app-session-results-chart',
  templateUrl: './session-results-chart.component.html',
  styleUrls: ['./session-results-chart.component.scss']
})
export class SessionResultsChartComponent implements OnInit {
  @Input() results: Array<ISessionResult> = []
  @Input() raceResults: Array<IRaceResult> = []
  @Input() isRace: Boolean = false

  @ViewChild("chart") chart!: ChartComponent
  public chartOptions!: IChartOptions;

  constructor() {
    this.chartOptions = resultsChartBase
  }

  ngOnInit(): void {
    const seriesValues: Array<number> = [];
    const categories: Array<string> = [];
    const colors: Array<string> = [];

    if (this.isRace) {
      const fastest = this.raceResults[0].time ? this.raceResults[0].time.millis : 0;
      this.raceResults.forEach((result) => {
        if (result.time && result.time?.millis > 0) {
          seriesValues.push(result.time.millis - fastest);
          categories.push(result.driver.driver.code);
          colors.push(result.driver.teams.color.primary);
        }
      });
    } else {
      this.results.forEach((result) => {
        seriesValues.push(result.lapTimeDeltaBase);
        categories.push(result.driverCode);
        colors.push(mapTeamColor(result.color));
      });
    }

    this.chartOptions.series = [
      {
        name: "Results",
        data: seriesValues,
      },
    ];

    const sessionResults = this.isRace ? this.raceResults : this.results;

    this.chartOptions.xaxis = {
      categories: categories
    }

    const vm = this

    this.chartOptions.tooltip = {
      enabled: true,
      x: {
        show: true,
        formatter: function (val, opts) {
          if (vm.isRace) {
            const result = sessionResults[opts.dataPointIndex] as IRaceResult;
            return `${result.driver.driver.givenName} ${result.driver.driver.familyName}`;
          } else {
            const result = sessionResults[opts.dataPointIndex] as ISessionResult;
            return `${result.fullName}`;
          }
        },
      },
      y: {
        formatter: function (val, opts) {
          if (vm.isRace) {
            const result = sessionResults[opts.dataPointIndex] as IRaceResult;

            if (!result.time) {
              return ''
            }

            return `${Timing.msToTime(result.time.millis).toStringFormatted(true)}`;
          } else {
            const result = sessionResults[opts.dataPointIndex] as ISessionResult;
            return `${result.lapTime.toStringFormatted(true)}`;
          }
        },
      },
    }

    this.chartOptions.colors = colors
  }
}
