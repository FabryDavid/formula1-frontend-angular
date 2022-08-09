import { IConstructorData } from './iconstructor-data';
import { IColors } from './icolors';

export interface IConstructor {
  team: IConstructorData;
  color: IColors;
  drivers: Array<{ code: string; id: string }>;
  nameExtended: {
    fullName: string;
    shortName: string;
  };
  points: number;
  position: number;
  positionText: string;
  wins: number;
}
