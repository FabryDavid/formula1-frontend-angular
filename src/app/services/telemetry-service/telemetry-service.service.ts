import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {Session} from "../../enums/session";
import {ILapTelemetry} from "../../interfaces/ilap-telemetry";
import {Timing} from "../../classes/timing/timing";
import {IDriverLapTelemetries} from "../../interfaces/idriver-lap-telemetries";
import {ILapDetailedTelemetry} from "../../interfaces/ilap-detailed-telemetry";
import {ITelemetryCarData} from "../../interfaces/itelemetry-car-data";
import {IImageData} from "../../interfaces/iimage-data";
import {DomSanitizer} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class TelemetryServiceService {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
  }

  getSessionLapsTelemetry(gp: string | number, session: Session): Observable<IDriverLapTelemetries> {
    return this.http.get<any>(`${environment.apiUrl}/all-lap-data/${gp}/${session}/2022`).pipe(
      map((data => {
          const result: IDriverLapTelemetries = {}

          data.forEach((driverResults: any) => {
            const driverLaps = [];
            let driverId;
            const driverObjectKeys = Object.keys(driverResults.Driver);

            for (const i in driverObjectKeys) {
              const index = driverObjectKeys[i];

              const lapResult: ILapTelemetry = {
                color: driverResults.Color[index],
                driverCode: driverResults.Driver[index],
                driverFullName: driverResults.DriverFullName[index],
                driverId: driverResults.DriverId[index],
                driverNumber: parseInt(driverResults.DriverNumber[index]),
                freshTyre: !!driverResults.FreshTyre[index],
                lapNumber: parseInt(driverResults.LapNumber[index]),
                lapStartTime: driverResults.LapStartTime[index] ? Timing.msToTime(driverResults.LapStartTime[index]) : null,
                lapTime: driverResults.LapTime[index] ? Timing.msToTime(driverResults.LapTime[index]) : null,
                sector1SessionTime: driverResults.Sector1SessionTime[index] ? Timing.msToTime(driverResults.Sector1SessionTime[index]) : null,
                sector1Time: driverResults.Sector1Time[index] ? Timing.msToTime(driverResults.Sector1Time[index]) : null,
                sector2SessionTime: driverResults.Sector2SessionTime[index] ? Timing.msToTime(driverResults.Sector2SessionTime[index]) : null,
                sector2Time: driverResults.Sector2Time[index] ? Timing.msToTime(driverResults.Sector2Time[index]) : null,
                sector3SessionTime: driverResults.Sector3SessionTime[index] ? Timing.msToTime(driverResults.Sector3SessionTime[index]) : null,
                sector3Time: driverResults.Sector3Time[index] ? Timing.msToTime(driverResults.Sector3Time[index]) : null,
                speedFL: driverResults.SpeedFL[index] ? parseFloat(driverResults.SpeedFL[index]) : null,
                speedI1: driverResults.SpeedI1[index] ? parseFloat(driverResults.SpeedI1[index]) : null,
                speedI2: driverResults.SpeedI2[index] ? parseFloat(driverResults.SpeedI2[index]) : null,
                speedST: driverResults.SpeedST[index] ? parseFloat(driverResults.SpeedST[index]) : null,
                stint: driverResults.Stint[index],
                team: driverResults.Team[index],
                time: Timing.msToTime(driverResults.Time[index]),
                tireLife: driverResults.TyreLife[index],
                trackStatus: parseInt(driverResults.TrackStatus[index]),
                tyreCompound: driverResults.Compound[index],
              }

              driverLaps.push(lapResult);
              driverId = lapResult.driverId;
            }

            if (driverId) {
              result[driverId] = driverLaps;
            }
          })

          return result
        }),
        catchError(this.handleError.bind(this))
      )
    )
  }

  getSessionSingleLapTelemetry(gp: string | number, session: Session, lap: number, drivers: Array<string>): Observable<Array<ILapDetailedTelemetry>> {
    return this.http.get<any>(`${environment.apiUrl}/all-car-data/${gp}/${session}/2022/${lap}/${drivers.join(",")}`).pipe(
      map((data => {
          const result: Array<ILapDetailedTelemetry> = []

          data.forEach((telemetry: any) => {
            const carData: ITelemetryCarData = {
              brake: Object.values(telemetry.carData.Brake).map((x) => parseFloat(x as string)),
              throttle: Object.values(telemetry.carData.Throttle).map((x) => parseFloat(x as string)),
              drs: Object.values(telemetry.carData.DRS).map((x) => parseFloat(x as string)),
              distance: Object.values(telemetry.carData.Distance).map((x) => parseFloat(x as string)),
              rpm: Object.values(telemetry.carData.RPM).map((x) => parseFloat(x as string)),
              sessionTime: Object.values(telemetry.carData.SessionTime).map((x) => Timing.msToTime(parseFloat(x as string))),
              speed: Object.values(telemetry.carData.Speed).map((x) => parseFloat(x as string)),
              gear: Object.values(telemetry.carData.nGear).map((x) => parseFloat(x as string)),
            }

            result.push({
              driverId: telemetry.driverId,
              driverFullName: telemetry.fullName,
              team: telemetry.team,
              color: telemetry.color,
              carData
            })
          })

          return result
        }),
        catchError(this.handleError.bind(this))
      )
    )
  }

  getGearshifts(gp: string | number, session: Session, lap: number, driver: string): Observable<IImageData> {
    return this.http.get(
      `${environment.apiUrl}/gear-shifts-on-lap/${lap}/${driver}/${gp}/${session}/2022`,
      {observe: 'response', responseType: 'blob'}
    ).pipe(
      map((data => {
          const blob = data.body
          const objectURL = URL.createObjectURL(blob);

          return {
            data: this.sanitizer.bypassSecurityTrustUrl(objectURL),
            url: data.url,
          }
        }),
        catchError(this.handleError.bind(this))
      )
    )
  }

  getSpeedMap(gp: string | number, session: Session, lap: number, driver: string): Observable<IImageData> {
    return this.http.get(
      `${environment.apiUrl}/speed-on-lap/${lap}/${driver}/${gp}/${session}/2022`,
      {observe: 'response', responseType: 'blob'}
    ).pipe(
      map((data => {
          const blob = data.body
          const objectURL = URL.createObjectURL(blob);

          return {
            data: this.sanitizer.bypassSecurityTrustUrl(objectURL),
            url: data.url,
          }
        }),
        catchError(this.handleError.bind(this))
      )
    )
  }

  public handleError(
    err: HttpErrorResponse,
    caught: Observable<any>
  ): Observable<any> {
    return throwError(err);
  }
}
