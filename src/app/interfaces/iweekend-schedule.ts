import {ICircuit} from './icircuit';
import {ISessionTime} from './isession-time';

export interface IWeekendSchedule {
  circuit: ICircuit;
  firstPractice: ISessionTime;
  secondPractice: ISessionTime;
  thirdPractice: ISessionTime | null;
  qualifying: ISessionTime;
  sprint: ISessionTime | null;
  date: string;
  time: string;
  raceName: string;
  round: string;
  season: string;
  url: string;
}
