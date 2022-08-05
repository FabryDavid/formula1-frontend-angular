import {IDriver} from "../../interfaces/idriver";
import {ITweetsResponse} from "../../interfaces/itweets-response";
import {ITweet} from "../../interfaces/itweet";

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
}
