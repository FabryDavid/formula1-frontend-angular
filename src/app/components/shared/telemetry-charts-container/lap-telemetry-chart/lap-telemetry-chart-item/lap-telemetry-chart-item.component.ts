import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ILapDetailedTelemetry} from "../../../../../interfaces/ilap-detailed-telemetry";
import {ApexAxisChartSeries} from "ng-apexcharts";

@Component({
  selector: 'app-lap-telemetry-chart-item',
  templateUrl: './lap-telemetry-chart-item.component.html',
  styleUrls: ['./lap-telemetry-chart-item.component.scss']
})
export class LapTelemetryChartItemComponent implements OnInit, OnChanges {
  @Input() lapTelemetry: Array<ILapDetailedTelemetry> = []


  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.lapTelemetry) {
      const telemetry = changes.lapTelemetry.currentValue

      this.getChartDatas(telemetry)
    }
  }

  getChartDatas(data: Array<ILapDetailedTelemetry>) {
    const throttleSeries: ApexAxisChartSeries = [];
    const brakeSeries: ApexAxisChartSeries = [];
    const rpmSeries: ApexAxisChartSeries = [];
    const gearSeries: ApexAxisChartSeries = [];
    const drsSeries: ApexAxisChartSeries = [];
    let categories: ApexAxisChartSeries = [];
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
      const distanceKeys = Object.keys(carData.distance);

      for (let i: number = 0; i < distanceKeys.length; i += nth) {
        // speedSeriesValues.push([
        //   carData.distance[i],
        //   carData.speed[distanceKeys[i]],
        // ]);
        // throttleSeriesValues.push([
        //   carData.distance[i],
        //   carData.throttle[distanceKeys[i]],
        // ]);
        // brakeSeriesValues.push([
        //   carData.distance[i],
        //   carData.brake[distanceKeys[i]],
        // ]);
        // rpmSeriesValues.push([
        //   carData.distance[i],
        //   carData.rpm[distanceKeys[i]],
        // ]);
        // gearSeriesValues.push([
        //   carData.distance[i],
        //   carData.gear[distanceKeys[i]],
        // ]);
        // drsSeriesValues.push([
        //   carData.distance[i],
        //   carData.drs[distanceKeys[i]],
        // ]);
        //
        // if (!categories.includes(carData.distance[i])) {
        //   categories.push(carData.distance[i]);
        // }
      }
      // color = item.color;
      // driverName = item.fullName;
      //
      // const name = driverName ? driverName : key;
      // speedSeries.push({
      //   name: name,
      //   data: speedSeriesValues,
      // });
      // throttleSeries.push({
      //   name: name,
      //   data: throttleSeriesValues,
      // });
      // brakeSeries.push({
      //   name: name,
      //   data: brakeSeriesValues,
      // });
      // rpmSeries.push({
      //   name: name,
      //   data: rpmSeriesValues,
      // });
      // gearSeries.push({
      //   name: name,
      //   data: gearSeriesValues,
      // });
      // drsSeries.push({
      //   name: name,
      //   data: drsSeriesValues,
      // });
      //
      // const teamColor = this.mapTeamColor(color);
      // if (colors.includes(teamColor)) {
      //   const t = lightenDarkenColor(teamColor, 20);
      //   colors.push(t);
      // } else {
      //   colors.push(teamColor);
      // }
      //
      // if (speedSeries.length > maxLength) {
      //   maxLength = speedSeries.length;
      // }
    });

    // this.speedSeries = speedSeries;
    // this.throttleSeries = throttleSeries;
    // this.brakeSeries = brakeSeries;
    // this.rpmSeries = rpmSeries;
    // this.gearSeries = gearSeries;
    // this.drsSeries = drsSeries;

    // categories.sort();
    //
    // return [colors, categories];
  }
}
