import {IDriver} from '../../interfaces/idriver';
import {ITweetsResponse} from '../../interfaces/itweets-response';
import {ITweet} from '../../interfaces/itweet';
import {IRaceResult} from '../../interfaces/irace-result';
import {IWeekendSchedule} from '../../interfaces/iweekend-schedule';
import {ISessionResult} from '../../interfaces/isession-result';
import {Timing} from '../timing/timing';
import {IDriverLapTelemetries} from '../../interfaces/idriver-lap-telemetries';
import {ILapTelemetry} from '../../interfaces/ilap-telemetry';
import {ITelemetryCarData} from '../../interfaces/itelemetry-car-data';
import {IImageData} from '../../interfaces/iimage-data';
import {DomSanitizer} from '@angular/platform-browser';
import {Injectable} from '@angular/core';
import {IConstructor} from "../../interfaces/iconstructor";

@Injectable({
  providedIn: 'root',
})
export class ServerResponseConverter {
  constructor(private sanitizer: DomSanitizer) {
  }

  static driver(response: any): IDriver {
    return {
      teams: ServerResponseConverter.team(response.Constructors),
      driver: {
        code: response.Driver.code,
        dateOfBirth: response.Driver.dateOfBirth,
        driverId: response.Driver.driverId,
        familyName: response.Driver.familyName,
        givenName: response.Driver.givenName,
        nationality: response.Driver.nationality,
        permanentNumber: response.Driver.permanentNumber,
        url: response.Driver.url,
      },
      points: parseFloat(response.points),
      position: parseFloat(response.position),
      positionText: response.points,
      wins: parseFloat(response.wins),
    };
  }

  static team(response: any): IConstructor {
    return {
      team: {
        constructorId: response.Constructor.constructorId,
        name: response.Constructor.name,
        nationality: response.Constructor.nationality,
        url: response.Constructor.url,
      },
      color: {
        primary: response.color.primary,
        secondary: response.color.secondary,
        tertiary: response.color.tertiary,
      },
      drivers: response.drivers,
      nameExtended: {
        fullName: response.nameExtended.fullName,
        shortName: response.nameExtended.shortName,
      },
      points: parseFloat(response.points),
      position: parseInt(response.position),
      positionText: response.positionText,
      wins: parseInt(response.wins),
    }
  }

  static tweetResponse(response: any): ITweetsResponse {
    const data: Array<ITweet> = [];

    response.data.forEach((tweet: any) => {
      const t: ITweet = {
        id: tweet.id,
        text: tweet.text,
        entities: tweet.entities,
        publicMetrics: {
          retweetCount: tweet.public_metrics.retweet_count,
          replyCount: tweet.public_metrics.reply_count,
          likeCount: tweet.public_metrics.like_count,
          quoteCount: tweet.public_metrics.quote_count,
        },
        createdAt: tweet.created_at,
        attachments: tweet.attachments,
      };

      data.push(t);
    });

    return {
      data,
      meta: {
        nextToken: response.meta.next_token,
        resultCount: response.meta.result_count,
        newestId: response.meta.newest_id,
        oldestId: response.meta.oldest_id,
      },
    };
  }

  static raceResult(response: any): Array<IRaceResult> {
    const results: Array<IRaceResult> = [];

    response.forEach((dataItem: any) => {
      const r: IRaceResult = {
        driver: {
          teams: {
            team: {
              constructorId:
              dataItem.Driver.Constructors.Constructor.constructorId,
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
        time: dataItem.Time
          ? {
            millis: parseInt(dataItem.Time.millis),
            time: dataItem.Time.time,
          }
          : null,
        grid: parseInt(dataItem.grid),
        laps: parseInt(dataItem.laps),
        number: parseInt(dataItem.number),
        points: parseFloat(dataItem.points),
        position: parseInt(dataItem.position),
        positionText: dataItem.positionText,
        status: dataItem.status,
      };

      results.push(r);
    });

    return results;
  }

  static weekendSchedule(response: any): IWeekendSchedule {
    return {
      circuit: response.Circuit,
      firstPractice: response.FirstPractice,
      secondPractice: response.SecondPractice,
      thirdPractice: response.ThirdPractice,
      qualifying: response.Qualifying,
      sprint: response.Sprint,
      date: response.date,
      time: response.time,
      raceName: response.raceName,
      round: response.round,
      season: response.season,
      url: response.url,
    };
  }

  static sessionResult(response: any): Array<ISessionResult> {
    const results: Array<ISessionResult> = [];
    for (const key in Object.keys(response.Driver)) {
      const sessionResult: ISessionResult = {
        color: response.Color[key],
        compound: response.Compound[key],
        driverCode: response.Driver[key],
        driverId: response.DriverId[key],
        driverNumber: parseInt(response.DriverNumber[key]),
        freshTyre: !!response.FreshTyre[key],
        fullName: response.DriverFullName[key],
        lapNumber: parseInt(response.LapNumber[key]),
        lapStartTime: Timing.msToTime(response.LapStartTime[key]),
        lapTime: Timing.msToTime(response.LapTime[key]),
        lapTimeBase: parseFloat(response.LapTime[key]),
        lapTimeDelta: response.LapTimeDelta
          ? Timing.msToTime(response.LapTimeDelta[key])
          : null,
        lapTimeDeltaBase: parseFloat(response.LapTimeDelta[key]),
        position: parseInt(key),
        sector1SessionTime: Timing.msToTime(response.Sector1SessionTime[key]),
        sector1Time: Timing.msToTime(response.Sector1Time[key]),
        sector2SessionTime: Timing.msToTime(response.Sector2SessionTime[key]),
        sector2Time: Timing.msToTime(response.Sector2Time[key]),
        sector3SessionTime: Timing.msToTime(response.Sector3SessionTime[key]),
        sector3Time: Timing.msToTime(response.Sector3Time[key]),
        speedFl: parseFloat(response.SpeedFL[key]),
        speedI1: parseFloat(response.SpeedI1[key]),
        speedI2: parseFloat(response.SpeedI2[key]),
        speedSt: parseFloat(response.SpeedST[key]),
        stint: parseInt(response.Stint[key]),
        team: response.Team[key],
        time: Timing.msToTime(response.Time[key]),
        trackStatus: parseInt(response.TrackStatus[key]),
        tyreLife: parseFloat(response.TyreLife[key]),
      };

      results.push(sessionResult);
    }

    return results;
  }

  static sessionTelemetry(response: any): IDriverLapTelemetries {
    const result: IDriverLapTelemetries = {};

    response.forEach((driverResults: any) => {
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
          lapStartTime: driverResults.LapStartTime[index]
            ? Timing.msToTime(driverResults.LapStartTime[index])
            : null,
          lapTime: driverResults.LapTime[index]
            ? Timing.msToTime(driverResults.LapTime[index])
            : null,
          sector1SessionTime: driverResults.Sector1SessionTime[index]
            ? Timing.msToTime(driverResults.Sector1SessionTime[index])
            : null,
          sector1Time: driverResults.Sector1Time[index]
            ? Timing.msToTime(driverResults.Sector1Time[index])
            : null,
          sector2SessionTime: driverResults.Sector2SessionTime[index]
            ? Timing.msToTime(driverResults.Sector2SessionTime[index])
            : null,
          sector2Time: driverResults.Sector2Time[index]
            ? Timing.msToTime(driverResults.Sector2Time[index])
            : null,
          sector3SessionTime: driverResults.Sector3SessionTime[index]
            ? Timing.msToTime(driverResults.Sector3SessionTime[index])
            : null,
          sector3Time: driverResults.Sector3Time[index]
            ? Timing.msToTime(driverResults.Sector3Time[index])
            : null,
          speedFL: driverResults.SpeedFL[index]
            ? parseFloat(driverResults.SpeedFL[index])
            : null,
          speedI1: driverResults.SpeedI1[index]
            ? parseFloat(driverResults.SpeedI1[index])
            : null,
          speedI2: driverResults.SpeedI2[index]
            ? parseFloat(driverResults.SpeedI2[index])
            : null,
          speedST: driverResults.SpeedST[index]
            ? parseFloat(driverResults.SpeedST[index])
            : null,
          stint: driverResults.Stint[index],
          team: driverResults.Team[index],
          time: Timing.msToTime(driverResults.Time[index]),
          tireLife: driverResults.TyreLife[index],
          trackStatus: parseInt(driverResults.TrackStatus[index]),
          tyreCompound: driverResults.Compound[index],
        };

        driverLaps.push(lapResult);
        driverId = lapResult.driverId;
      }

      if (driverId) {
        result[driverId] = driverLaps;
      }
    });

    return result;
  }

  static telemetryCarData(response: any): ITelemetryCarData {
    return {
      brake: Object.values(response.Brake).map((x) => parseFloat(x as string)),
      throttle: Object.values(response.Throttle).map((x) =>
        parseFloat(x as string)
      ),
      drs: Object.values(response.DRS).map((x) => parseFloat(x as string)),
      distance: Object.values(response.Distance).map((x) =>
        parseFloat(x as string)
      ),
      rpm: Object.values(response.RPM).map((x) => parseFloat(x as string)),
      sessionTime: Object.values(response.SessionTime).map((x) =>
        Timing.msToTime(parseFloat(x as string))
      ),
      speed: Object.values(response.Speed).map((x) => parseFloat(x as string)),
      gear: Object.values(response.nGear).map((x) => parseFloat(x as string)),
    };
  }

  imageData(response: any): IImageData {
    const blob = response.body;
    const objectURL = URL.createObjectURL(blob);

    return {
      data: this.sanitizer.bypassSecurityTrustUrl(objectURL),
      url: response.url,
    };
  }
}
