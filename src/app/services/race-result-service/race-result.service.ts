import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {IRaceResult} from "../../interfaces/irace-result";

@Injectable({
  providedIn: 'root'
})
export class RaceResultService {

  constructor(private http: HttpClient) {
  }

  getRaceResult(round: number): Observable<Array<IRaceResult>> {
    return this.http.get<any>(`${environment.apiUrl}/race-results/${round}/2022`).pipe(
      map((data => {
          const results: Array<IRaceResult> = []

          data.forEach((dataItem: any) => {
            const r: IRaceResult = {
              driver: {
                teams: {
                  team: {
                    constructorId: dataItem.Driver.Constructors.Constructor.constructorId,
                    name: dataItem.Driver.Constructors.Constructor.name,
                    nationality: dataItem.Driver.Constructors.Constructor.nationality,
                    url: dataItem.Driver.Constructors.Constructor.url,
                  },
                  color: {
                    primary: dataItem.Driver.Constructors.color.primary,
                    secondary: dataItem.Driver.Constructors.color.secondary,
                    tertiary: dataItem.Driver.Constructors.color.tertiary,
                  },
                  drivers: dataItem.Driver.Constructors.drivers,
                  nameExtended: {
                    fullName: dataItem.Driver.Constructors.nameExtended.fullName,
                    shortName: dataItem.Driver.Constructors.nameExtended.shortName,
                  },
                  points: parseFloat(dataItem.Driver.Constructors.points),
                  position: parseInt(dataItem.Driver.Constructors.position),
                  positionText: dataItem.Driver.Constructors.positionText,
                  wins: parseInt(dataItem.Driver.Constructors.wins),
                },
                driver: {
                  code: dataItem.Driver.Driver.code,
                  dateOfBirth: dataItem.Driver.Driver.dateOfBirth,
                  driverId: dataItem.Driver.Driver.driverId,
                  familyName: dataItem.Driver.Driver.familyName,
                  givenName: dataItem.Driver.Driver.givenName,
                  nationality: dataItem.Driver.Driver.nationality,
                  permanentNumber: dataItem.Driver.Driver.permanentNumber,
                  url: dataItem.Driver.Driver.url,
                },
                points: parseFloat(dataItem.Driver.points),
                position: parseFloat(dataItem.Driver.position),
                positionText: dataItem.Driver.points,
                wins: parseFloat(dataItem.Driver.wins),
              },
              fastestLap: {
                averageSpeed: {
                  speed: parseFloat(dataItem.FastestLap.AverageSpeed.speed),
                  units: dataItem.FastestLap.AverageSpeed.units,
                },
                time: dataItem.FastestLap.Time.time,
                lap: parseInt(dataItem.FastestLap.lap),
                rank: parseInt(dataItem.FastestLap.rank),
              },
              time: dataItem.Time ? {
                millis: parseInt(dataItem.Time.millis),
                time: dataItem.Time.time,
              } : null,
              grid: parseInt(dataItem.grid),
              laps: parseInt(dataItem.laps),
              number: parseInt(dataItem.number),
              points: parseFloat(dataItem.points),
              position: parseInt(dataItem.position),
              positionText: dataItem.positionText,
              status: dataItem.status,
            }

            results.push(r);
          });

          return results
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
