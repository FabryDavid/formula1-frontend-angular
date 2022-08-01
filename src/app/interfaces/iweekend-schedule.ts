import {ICircuit} from "./icircuit";
import {ISessionTime} from "./isession-time";

export interface IWeekendSchedule {
  Circuit: ICircuit,
  FirstPractice: ISessionTime,
  SecondPractice: ISessionTime,
  ThirdPractice: ISessionTime | null,
  Qualifying: ISessionTime,
  Sprint: ISessionTime | null
  date: string,
  time: string,
  raceName: string,
  round: number,
  season: number,
  url: string
}
