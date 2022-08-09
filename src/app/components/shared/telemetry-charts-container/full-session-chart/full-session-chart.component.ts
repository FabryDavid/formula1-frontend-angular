import {Component, Input, OnChanges, OnInit, SimpleChanges,} from '@angular/core';
import {TelemetryChartMode} from '../../../../enums/telemetry-chart-mode';
import {IChartOptions} from '../../../../interfaces/ichart-options';
import {Timing} from '../../../../classes/timing/timing';
import {Session} from '../../../../enums/session';
import {TelemetryServiceService} from '../../../../services/telemetry-service/telemetry-service.service';
import {ApexAxisChartSeries} from 'ng-apexcharts';
import {IDriverLapTelemetries} from '../../../../interfaces/idriver-lap-telemetries';
import telemetryChartBase from '../../../../helpers/telemetry-chart-base';
import mapTeamColor from '../../../../helpers/map-team-color';

@Component({
  selector: 'app-full-session-chart',
  templateUrl: './full-session-chart.component.html',
  styleUrls: ['./full-session-chart.component.scss'],
})
export class FullSessionChartComponent implements OnInit, OnChanges {
  @Input() round!: string | number;
  @Input() session!: Session;
  @Input() chartMode!: TelemetryChartMode;

  isLoading = false;
  driversTelemetry: IDriverLapTelemetries = {};
  chartOptions: IChartOptions = telemetryChartBase;

  constructor(private telemetryServiceService: TelemetryServiceService) {}

  ngOnInit(): void {
    this.telemetryServiceService
      .getSessionLapsTelemetry(this.round, this.session)
      .subscribe((data) => {
        this.driversTelemetry = data;

        const [colors, categories, series] = this.getChartDatas(
          this.driversTelemetry
        );

        this.chartOptions.series = series;
        this.chartOptions.xaxis.categories = categories;
        this.chartOptions.colors = colors;
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.chartMode) {
      const [colors, categories, series] = this.getChartDatas(
        this.driversTelemetry
      );

      let title;
      let formatter;
      switch (this.chartMode) {
        case TelemetryChartMode.SECTOR1:
        case TelemetryChartMode.SECTOR2:
        case TelemetryChartMode.SECTOR3:
          title = 'Time';
          formatter = (val: number) =>
            Timing.msToTime(val).toStringFormatted(true);
          break;
        case TelemetryChartMode.S1_SPEED_TRAP:
        case TelemetryChartMode.S2_SPEED_TRAP:
          title = 'Speed (km/h)';
          formatter = (val: number) => `${val} km/h`;
          break;
        default:
          title = 'Time';
          formatter = (val: number) =>
            Timing.msToTime(val).toStringFormatted(true);
          break;
      }

      this.chartOptions.series = series;
      this.chartOptions.xaxis.categories = categories;
      this.chartOptions.yaxis.title = {
        text: title,
      };
      this.chartOptions.yaxis.labels = {
        formatter,
      };
      this.chartOptions.tooltip.y = {
        formatter,
      };
      this.chartOptions.colors = colors;
    }
  }

  private getChartDatas(
    driverLapTelemetries: IDriverLapTelemetries
  ): [
    colors: Array<string>,
    categories: Array<number>,
    series: ApexAxisChartSeries
  ] {
    const series: ApexAxisChartSeries = [];
    const categories: Array<number> = [];
    const colors: Array<string> = [];
    let maxLength = 0;

    const resultKeys = Object.keys(driverLapTelemetries);

    resultKeys.sort((a, b) => {
      const aValues = driverLapTelemetries[a];
      const bValues = driverLapTelemetries[b];

      if (!aValues || aValues.length === 0) {
        return 1;
      }

      if (!bValues || bValues.length === 0) {
        return -1;
      }

      const aTeam = aValues[0].team;
      const bTeam = bValues[0].team;

      if (aTeam === bTeam) {
        const aName = aValues[0].driverFullName;
        const bName = bValues[0].driverFullName;

        return aName > bName ? 1 : -1;
      }

      return aTeam > bTeam ? 1 : -1;
    });

    resultKeys.forEach((key) => {
      const seriesValues: (number | null)[] = [];
      let color;
      let driverName;
      let i = 1;
      driverLapTelemetries[key].forEach((item) => {
        switch (this.chartMode) {
          case TelemetryChartMode.SECTOR1:
            seriesValues.push(item.sector1Time ? item.sector1Time?.base : null);
            break;
          case TelemetryChartMode.SECTOR2:
            seriesValues.push(item.sector2Time ? item.sector2Time?.base : null);
            break;
          case TelemetryChartMode.SECTOR3:
            seriesValues.push(item.sector3Time ? item.sector3Time?.base : null);
            break;
          case TelemetryChartMode.S1_SPEED_TRAP:
            seriesValues.push(item.speedI1);
            break;
          case TelemetryChartMode.S2_SPEED_TRAP:
            seriesValues.push(item.speedI2);
            break;
          default:
            seriesValues.push(item.lapTime ? item.lapTime.base : null);
            break;
        }

        color = item.color;
        driverName = item.driverCode;

        if (!categories.includes(i)) {
          categories.push(i);
        }
        i++;
      });

      series.push({
        name: driverName ? driverName : key,
        data: seriesValues,
      });

      colors.push(mapTeamColor(color));

      if (seriesValues.length > maxLength) {
        maxLength = seriesValues.length;
      }
    });

    for (let i = 0; i < series.length; i++) {
      while (series[i].data.length < maxLength) {
        // @ts-ignore
        series[i].data.push(null);
      }
    }

    return [colors, categories, series];
  }
}
