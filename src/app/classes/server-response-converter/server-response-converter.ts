import {IDriver} from "../../interfaces/idriver";
import {ITweetsResponse} from "../../interfaces/itweets-response";
import {ITweet} from "../../interfaces/itweet";
import {IRaceResult} from "../../interfaces/irace-result";
import {IWeekendSchedule} from "../../interfaces/iweekend-schedule";

export class ServerResponseConverter {
  static driver(response: any): IDriver {
    return {
      teams: {
        team: {
          constructorId: response.Constructors.Constructor.constructorId,
          name: response.Constructors.Constructor.name,
          nationality: response.Constructors.Constructor.nationality,
          url: response.Constructors.Constructor.url,
        },
        color: {
          primary: response.Constructors.color.primary,
          secondary: response.Constructors.color.secondary,
          tertiary: response.Constructors.color.tertiary,
        },
        drivers: response.Constructors.drivers,
        nameExtended: {
          fullName: response.Constructors.nameExtended.fullName,
          shortName: response.Constructors.nameExtended.shortName,
        },
        points: parseFloat(response.Constructors.points),
        position: parseInt(response.Constructors.position),
        positionText: response.Constructors.positionText,
        wins: parseInt(response.Constructors.wins),
      },
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
    }
  }

  static tweetResponse(response: any): ITweetsResponse {
    const data: Array<ITweet> = []

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
        attachments: tweet.attachments
      }

      data.push(t)
    })

    return {
      data,
      meta: {
        nextToken: response.meta.next_token,
        resultCount: response.meta.result_count,
        newestId: response.meta.newest_id,
        oldestId: response.meta.oldest_id,
      }
    }
  }

  static raceResult(response: any): Array<IRaceResult> {
    const results: Array<IRaceResult> = []

    response.forEach((dataItem: any) => {
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
    }
  }
}
