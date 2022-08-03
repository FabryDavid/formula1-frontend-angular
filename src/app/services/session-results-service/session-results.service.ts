import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {Session} from "../../enums/session";
import {ISessionResult} from "../../interfaces/isession-result";
import {Timing} from "../../classes/timing/timing";

@Injectable({
  providedIn: 'root'
})
export class SessionResultsService {

  constructor(private http: HttpClient) {
  }

  getSessionResults(gp: number | string, session: Session): Observable<Array<ISessionResult>> {
    return this.http.get<any>(`${environment.apiUrl}/session-results/${gp}/${session}/2022`).pipe(
      map((data => {
          const results: Array<ISessionResult> = []

          if (data.length === 0) {
            return data;
          }
          for (const key in Object.keys(data.Driver)) {
            const sessionResult: ISessionResult = {
              color: data.Color[key],
              compound: data.Compound[key],
              driverCode: data.Driver[key],
              driverId: data.DriverId[key],
              driverNumber: parseInt(data.DriverNumber[key]),
              freshTyre: !!data.FreshTyre[key],
              fullName: data.DriverFullName[key],
              lapNumber: parseInt(data.LapNumber[key]),
              lapStartTime: Timing.msToTime(data.LapStartTime[key]),
              lapTime: Timing.msToTime(data.LapTime[key]),
              lapTimeBase: parseFloat(data.LapTime[key]),
              lapTimeDelta: data.LapTimeDelta ? Timing.msToTime(data.LapTimeDelta[key]) : null,
              lapTimeDeltaBase: parseFloat(data.LapTimeDelta[key]),
              position: parseInt(key),
              sector1SessionTime: Timing.msToTime(data.Sector1SessionTime[key]),
              sector1Time: Timing.msToTime(data.Sector1Time[key]),
              sector2SessionTime: Timing.msToTime(data.Sector2SessionTime[key]),
              sector2Time: Timing.msToTime(data.Sector2Time[key]),
              sector3SessionTime: Timing.msToTime(data.Sector3SessionTime[key]),
              sector3Time: Timing.msToTime(data.Sector3Time[key]),
              speedFl: parseFloat(data.SpeedFL[key]),
              speedI1: parseFloat(data.SpeedI1[key]),
              speedI2: parseFloat(data.SpeedI2[key]),
              speedSt: parseFloat(data.SpeedST[key]),
              stint: parseInt(data.Stint[key]),
              team: data.Team[key],
              time: Timing.msToTime(data.Time[key]),
              trackStatus: parseInt(data.TrackStatus[key]),
              tyreLife: parseFloat(data.TyreLife[key]),
            }

            results.push(sessionResult);
          }

          return results;
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
