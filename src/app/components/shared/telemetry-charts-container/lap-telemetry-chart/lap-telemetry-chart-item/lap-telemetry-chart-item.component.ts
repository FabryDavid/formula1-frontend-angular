import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ILapDetailedTelemetry} from "../../../../../interfaces/ilap-detailed-telemetry";
import {ApexAxisChartSeries} from "ng-apexcharts";
import mapTeamColor from "../../../../../helpers/mapTeamColor";
import lightenDarkenColor from "../../../../../helpers/lightenDarkenColor";
import {ILapTelemetryChartData} from "../../../../../interfaces/ilap-telemetry-chart-data";
import telemetryChartBase from "../../../../../helpers/telemetry-chart-base";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexLegend,
  ApexPlotOptions,
  ApexResponsive,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from "ng-apexcharts";

@Component({
  selector: 'app-lap-telemetry-chart-item',
  templateUrl: './lap-telemetry-chart-item.component.html',
  styleUrls: ['./lap-telemetry-chart-item.component.scss']
})
export class LapTelemetryChartItemComponent implements OnInit, OnChanges {
  @Input() lapTelemetry: Array<ILapDetailedTelemetry> = []

  speedChartOptions = telemetryChartBase
  throttleChartOptions = telemetryChartBase
  brakeChartOptions = telemetryChartBase
  rpmChartOptions = telemetryChartBase
  gearChartOptions = telemetryChartBase
  drsChartOptions = telemetryChartBase

  constructor() {
    this.speedChartOptions.chart.id = "speedChart"
    this.speedChartOptions.chart.group = "telemetry"
    this.speedChartOptions.legend.show = false

    this.throttleChartOptions.chart.id = "throttleChart"
    this.throttleChartOptions.chart.group = "telemetry"
    this.throttleChartOptions.legend.show = false

    this.brakeChartOptions.chart.id = "brakeChart"
    this.brakeChartOptions.chart.group = "telemetry"
    this.brakeChartOptions.legend.show = false

    this.rpmChartOptions.chart.id = "rpmChart"
    this.rpmChartOptions.chart.group = "telemetry"
    this.rpmChartOptions.legend.show = false

    this.gearChartOptions.chart.id = "gearChart"
    this.gearChartOptions.chart.group = "telemetry"
    this.gearChartOptions.legend.show = false

    this.drsChartOptions.chart.id = "drsChart"
    this.drsChartOptions.chart.group = "telemetry"
    this.drsChartOptions.legend.show = false
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.lapTelemetry) {
      const telemetry = changes.lapTelemetry.currentValue

      const chartData: ILapTelemetryChartData = this.getChartDatas(telemetry)
      // this.setChartDatas(chartData)
    }
  }

  getChartDatas(data: Array<ILapDetailedTelemetry>): ILapTelemetryChartData {
    const speedSeries: ApexAxisChartSeries = [];
    const throttleSeries: ApexAxisChartSeries = [];
    const brakeSeries: ApexAxisChartSeries = [];
    const rpmSeries: ApexAxisChartSeries = [];
    const gearSeries: ApexAxisChartSeries = [];
    const drsSeries: ApexAxisChartSeries = [];
    let categories: Array<number> = [];
    const colors: Array<string> = [];
    let maxLength = 0;

    const resultKeys = Object.keys(data);

    resultKeys.sort((a, b) => {
      const aValues = data[parseInt(a)];
      const bValues = data[parseInt(b)];

      const aTeam = aValues.team;
      const bTeam = bValues.team;

      if (aTeam === bTeam) {
        const aName = aValues.driverFullName;
        const bName = bValues.driverFullName;

        return aName > bName ? 1 : -1;
      }

      return aTeam > bTeam ? 1 : -1;
    });

    resultKeys.forEach((keyS) => {
      const key = parseInt(keyS)

      let speedSeriesValues: Array<any> = [];
      let throttleSeriesValues: Array<any> = [];
      let brakeSeriesValues: Array<any> = [];
      let rpmSeriesValues: Array<any> = [];
      let gearSeriesValues: Array<any> = [];
      let drsSeriesValues: Array<any> = [];
      let color;
      let driverName;

      const item = data[key];
      const nth = 2;

      const carData = item.carData;

      for (let i: number = 0; i < carData.distance.length; i += nth) {
        speedSeriesValues.push([
          carData.distance[i],
          carData.speed[i],
        ]);
        throttleSeriesValues.push([
          carData.distance[i],
          carData.throttle[i],
        ]);
        brakeSeriesValues.push([
          carData.distance[i],
          carData.brake[i],
        ]);
        rpmSeriesValues.push([
          carData.distance[i],
          carData.rpm[i],
        ]);
        gearSeriesValues.push([
          carData.distance[i],
          carData.gear[i],
        ]);
        drsSeriesValues.push([
          carData.distance[i],
          carData.drs[i],
        ]);

        if (!categories.includes(carData.distance[i])) {
          categories.push(carData.distance[i]);
        }
      }
      color = item.color;
      driverName = item.driverFullName;

      const name = driverName ? driverName : key.toString();
      speedSeries.push({
        name: name,
        data: speedSeriesValues,
      });
      throttleSeries.push({
        name: name,
        data: throttleSeriesValues,
      });
      brakeSeries.push({
        name: name,
        data: brakeSeriesValues,
      });
      rpmSeries.push({
        name: name,
        data: rpmSeriesValues,
      });
      gearSeries.push({
        name: name,
        data: gearSeriesValues,
      });
      drsSeries.push({
        name: name,
        data: drsSeriesValues,
      });

      const teamColor = mapTeamColor(color);
      if (colors.includes(teamColor)) {
        const t = lightenDarkenColor(teamColor, 20);
        colors.push(t);
      } else {
        colors.push(teamColor);
      }

      if (speedSeries.length > maxLength) {
        maxLength = speedSeries.length;
      }
    });

    categories.sort();

    return {
      speedSeries: speedSeries,
      throttleSeries: throttleSeries,
      brakeSeries: brakeSeries,
      rpmSeries: rpmSeries,
      gearSeries: gearSeries,
      drsSeries: drsSeries,
      colors,
      categories
    };
  }

  setChartDatas(chartData: ILapTelemetryChartData) {
    const strokeWidth = 2.5
    const xAxisOptions = {
      categories: chartData.categories,
      labels: {
        formatter: function () {
          return ``;
        },
      },
      tooltip: {
        enabled: false,
      },
    }

    this.speedChartOptions.xaxis = xAxisOptions
    this.speedChartOptions.yaxis = {
      labels: {
        formatter: function (val) {
          return `${val} km/h`;
        },
      },
      title: {
        text: "Speed (km/h)",
      }
    }
    this.speedChartOptions.colors = chartData.colors
    this.speedChartOptions.stroke = {
      width: strokeWidth,
      curve: "smooth"
    }
    this.speedChartOptions.series = chartData.speedSeries

    this.throttleChartOptions.xaxis = xAxisOptions
    this.throttleChartOptions.yaxis = {
      labels: {
        formatter: function (val) {
          return `${val} %`;
        },
      },
      max: 100,
      title: {
        text: "Throttle %",
      },
    }
    this.throttleChartOptions.colors = chartData.colors
    this.throttleChartOptions.stroke = {
      width: strokeWidth,
      curve: "smooth"
    }
    this.throttleChartOptions.series = chartData.throttleSeries

    this.brakeChartOptions.xaxis = xAxisOptions
    this.brakeChartOptions.yaxis = {
      labels: {
        formatter: function (val) {
          return `${val} %`;
        },
      },
      max: 100,
      title: {
        text: "Brake %",
      },
    }
    this.brakeChartOptions.colors = chartData.colors
    this.brakeChartOptions.stroke = {
      width: strokeWidth,
      curve: "stepline"
    }
    this.brakeChartOptions.series = chartData.brakeSeries

    this.rpmChartOptions.xaxis = xAxisOptions
    this.rpmChartOptions.yaxis = {
      labels: {
        formatter: function (val) {
          return `${val} RPM`;
        },
      },
      title: {
        text: "RPM",
      },
    }
    this.rpmChartOptions.colors = chartData.colors
    this.rpmChartOptions.stroke = {
      width: strokeWidth,
      curve: "smooth"
    }
    this.rpmChartOptions.series = chartData.rpmSeries

    this.gearChartOptions.xaxis = xAxisOptions
    this.gearChartOptions.yaxis = {
      labels: {
        formatter: function (val) {
          return val.toString();
        },
      },
      max: 8,
      title: {
        text: "Gear",
      },
    }
    this.gearChartOptions.colors = chartData.colors
    this.gearChartOptions.stroke = {
      width: strokeWidth,
      curve: "stepline"
    }
    this.gearChartOptions.series = chartData.gearSeries

    this.drsChartOptions.xaxis = xAxisOptions
    this.drsChartOptions.yaxis = {
      labels: {
        formatter: function (val) {
          return val <= 8 ? "OFF" : "ON";
        },
      },
      title: {
        text: "DRS",
      },
    }
    this.drsChartOptions.colors = chartData.colors
    this.drsChartOptions.stroke = {
      width: strokeWidth,
      curve: "stepline"
    }
    this.drsChartOptions.series = chartData.drsSeries
  }
}
