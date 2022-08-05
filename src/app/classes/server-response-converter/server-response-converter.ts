import {IDriver} from "../../interfaces/idriver";

export class ServerResponseConverter {
  static driver(data: any): IDriver {
    return {
      teams: {
        team: {
          constructorId: data.Constructors.Constructor.constructorId,
          name: data.Constructors.Constructor.name,
          nationality: data.Constructors.Constructor.nationality,
          url: data.Constructors.Constructor.url,
        },
        color: {
          primary: data.Constructors.color.primary,
          secondary: data.Constructors.color.secondary,
          tertiary: data.Constructors.color.tertiary,
        },
        drivers: data.Constructors.drivers,
        nameExtended: {
          fullName: data.Constructors.nameExtended.fullName,
          shortName: data.Constructors.nameExtended.shortName,
        },
        points: parseFloat(data.Constructors.points),
        position: parseInt(data.Constructors.position),
        positionText: data.Constructors.positionText,
        wins: parseInt(data.Constructors.wins),
      },
      driver: {
        code: data.Driver.code,
        dateOfBirth: data.Driver.dateOfBirth,
        driverId: data.Driver.driverId,
        familyName: data.Driver.familyName,
        givenName: data.Driver.givenName,
        nationality: data.Driver.nationality,
        permanentNumber: data.Driver.permanentNumber,
        url: data.Driver.url,
      },
      points: parseFloat(data.points),
      position: parseFloat(data.position),
      positionText: data.points,
      wins: parseFloat(data.wins),
    }
  }
}
