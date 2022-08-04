import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TelemetryChartMode} from "../../../../enums/telemetry-chart-mode";
import {IChartOptions} from "../../../../interfaces/ichart-options";
import {Timing} from "../../../../classes/timing/timing";
import {Session} from "../../../../enums/session";
import {TelemetryServiceService} from "../../../../services/telemetry-service/telemetry-service.service";
import {ApexAxisChartSeries} from "ng-apexcharts";
import {IDriverLapTelemetries} from "../../../../interfaces/idriver-lap-telemetries";

@Component({
  selector: 'app-full-session-chart',
  templateUrl: './full-session-chart.component.html',
  styleUrls: ['./full-session-chart.component.scss']
})
export class FullSessionChartComponent implements OnInit, OnChanges {
  @Input() round!: string | number
  @Input() session!: Session
  @Input() chartMode!: TelemetryChartMode

  isLoading = false
  driversTelemetry: IDriverLapTelemetries = {}
  chartOptions: IChartOptions = {
    chart: {
      type: "line",
      height: 600,
      animations: {
        enabled: true,
        easing: "easeout",
        speed: 300,
        animateGradually: {
          enabled: false,
        },
        dynamicAnimation: {
          enabled: false,
        },
      },
    },
    xaxis: {
      categories: [],
      title: {
        text: "Laps",
        style: {
          fontSize: "12px",
          fontFamily: "Poppins",
          fontWeight: 600,
        },
      },
      labels: {
        show: true,
        showDuplicates: false,
        style: {
          colors: [],
          fontSize: "12px",
          fontFamily: "Poppins",
        },
      },
    },
    yaxis: {
      title: {
        text: "Time",
        style: {
          fontSize: "12px",
          fontFamily: "Poppins",
          fontWeight: 600,
        },
      },
      labels: {
        show: true,
        style: {
          colors: [],
          fontSize: "12px",
          fontFamily: "Poppins",
        },
        formatter: function (val) {
          return Timing.msToTime(val).toStringFormatted(true);
        },
      },
    },
    series: [],
    stroke: {
      curve: "smooth",
    },
    colors: [],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      showForSingleSeries: false,
      position: "left",
      fontFamily: "Poppins",
    },
    plotOptions: {},
    tooltip: {
      enabled: true,
      x: {
        show: true,
        formatter: function (val) {
          return `Lap ${val}`;
        },
      },
      y: {
        formatter: function (val) {
          return Timing.msToTime(val).toStringFormatted(true);
        },
      },
    },
    responsive: [
      {
        breakpoint: 960,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  }

  constructor(private telemetryServiceService: TelemetryServiceService) {
  }

  ngOnInit(): void {
    this.telemetryServiceService.getSessionLapsTelemetry(this.round, this.session).subscribe((data) => {
      this.driversTelemetry = data

      const [colors, categories, series] = this.getChartDatas(this.driversTelemetry);

      this.chartOptions.series = series
      this.chartOptions.xaxis.categories = categories
      this.chartOptions.colors = colors
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.chartMode) {
      const value = changes.chartMode.currentValue
      console.log(value)

      const [colors, categories, series] = this.getChartDatas(this.driversTelemetry);

      let title;
      let formatter;
      switch (this.chartMode) {
        case TelemetryChartMode.SECTOR1:
        case TelemetryChartMode.SECTOR2:
        case TelemetryChartMode.SECTOR3:
          title = "Time";
          formatter = (val: number) => Timing.msToTime(val).toStringFormatted(true);
          break;
        case TelemetryChartMode.S1_SPEED_TRAP:
        case TelemetryChartMode.S2_SPEED_TRAP:
          title = "Speed (km/h)";
          formatter = (val: number) => `${val} km/h`;
          break;
        default:
          title = "Time";
          formatter = (val: number) => Timing.msToTime(val).toStringFormatted(true);
          break;
      }

      this.chartOptions.series = series
      this.chartOptions.xaxis.categories = categories
      this.chartOptions.yaxis.title = {
        text: title
      }
      this.chartOptions.yaxis.labels = {
        formatter
      }
      this.chartOptions.tooltip.y = {
        formatter
      }
      this.chartOptions.colors = colors
    }
  }

  private getChartDatas(driverLapTelemetries: IDriverLapTelemetries): [colors: Array<string>, categories: Array<number>, series: ApexAxisChartSeries] {
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

      colors.push(!color || color === "#ffffff" ? "#d4d4d4" : color);

      if (seriesValues.length > maxLength) {
        maxLength = seriesValues.length;
      }
    });

    for (let i = 0; i < series.length; i++) {
      while (series[i].data.length < maxLength) {
        // @ts-ignore
        series[i].data.push(null)
      }
    }

    return [colors, categories, series];
  }
}
