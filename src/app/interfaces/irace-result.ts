import { IDriver } from './idriver';
import { IFastestLap } from './ifastest-lap';

export interface IRaceResult {
  driver: IDriver;
  fastestLap: IFastestLap;
  time: null | {
    millis: number;
    time: string;
  };
  grid: number;
  laps: number;
  number: number;
  points: number;
  position: number;
  positionText: string;
  status: string;
}
