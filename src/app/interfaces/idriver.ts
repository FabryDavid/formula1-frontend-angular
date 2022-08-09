import {IConstructor} from './iconstructor';
import {IDriverData} from './idriver-data';

export interface IDriver {
  teams: IConstructor;
  driver: IDriverData;
  points: number;
  position: number;
  positionText: string;
  wins: number;
}
