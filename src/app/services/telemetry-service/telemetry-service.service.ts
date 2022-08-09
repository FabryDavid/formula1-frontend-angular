import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Session} from '../../enums/session';
import {IDriverLapTelemetries} from '../../interfaces/idriver-lap-telemetries';
import {ILapDetailedTelemetry} from '../../interfaces/ilap-detailed-telemetry';
import {ITelemetryCarData} from '../../interfaces/itelemetry-car-data';
import {IImageData} from '../../interfaces/iimage-data';
import {ServerResponseConverter} from '../../classes/server-response-converter/server-response-converter';
import handleError from "../../helpers/service-handle-error";

@Injectable({
  providedIn: 'root',
})
export class TelemetryServiceService {
  constructor(
    private http: HttpClient,
    private serverResponseConverter: ServerResponseConverter
  ) {
  }

  getSessionLapsTelemetry(
    gp: string | number,
    session: Session
  ): Observable<IDriverLapTelemetries> {
    return this.http
      .get<any>(`${environment.apiUrl}/all-lap-data/${gp}/${session}/2022`)
      .pipe(
        map((data) => {
          return ServerResponseConverter.sessionTelemetry(data);
        }, catchError(handleError.bind(this)))
      );
  }

  getSessionSingleLapTelemetry(
    gp: string | number,
    session: Session,
    lap: number,
    drivers: Array<string>
  ): Observable<Array<ILapDetailedTelemetry>> {
    return this.http
      .get<any>(
        `${
          environment.apiUrl
        }/all-car-data/${gp}/${session}/2022/${lap}/${drivers.join(',')}`
      )
      .pipe(
        map((data) => {
          const result: Array<ILapDetailedTelemetry> = [];

          data.forEach((telemetry: any) => {
            const carData: ITelemetryCarData =
              ServerResponseConverter.telemetryCarData(telemetry.carData);

            result.push({
              driverId: telemetry.driverId,
              driverFullName: telemetry.fullName,
              team: telemetry.team,
              color: telemetry.color,
              carData,
            });
          });

          return result;
        }, catchError(handleError.bind(this)))
      );
  }

  getGearshifts(
    gp: string | number,
    session: Session,
    lap: number,
    driver: string
  ): Observable<IImageData> {
    return this.http
      .get(
        `${environment.apiUrl}/gear-shifts-on-lap/${lap}/${driver}/${gp}/${session}/2022`,
        {observe: 'response', responseType: 'blob'}
      )
      .pipe(
        map((data) => {
          return this.serverResponseConverter.imageData(data);
        }, catchError(handleError.bind(this)))
      );
  }

  getSpeedMap(
    gp: string | number,
    session: Session,
    lap: number,
    driver: string
  ): Observable<IImageData> {
    return this.http
      .get(
        `${environment.apiUrl}/speed-on-lap/${lap}/${driver}/${gp}/${session}/2022`,
        {observe: 'response', responseType: 'blob'}
      )
      .pipe(
        map((data) => {
          return this.serverResponseConverter.imageData(data);
        }, catchError(handleError.bind(this)))
      );
  }
}
