import {Timing} from '../classes/timing/timing';
import {TireCompound} from '../enums/tire-compound';

export interface ISessionResult {
  color: string;
  compound: TireCompound;
  driverCode: string;
  driverId: string;
  driverNumber: number;
  freshTyre: boolean;
  fullName: string;
  lapNumber: number;
  lapStartTime: Timing;
  lapTime: Timing;
  lapTimeBase: number;
  lapTimeDelta: Timing | null;
  lapTimeDeltaBase: number;
  position: number;
  sector1SessionTime: Timing;
  sector1Time: Timing;
  sector2SessionTime: Timing;
  sector2Time: Timing;
  sector3SessionTime: Timing;
  sector3Time: Timing;
  speedFl: number;
  speedI1: number;
  speedI2: number;
  speedSt: number;
  stint: number;
  team: string;
  time: Timing;
  trackStatus: number;
  tyreLife: number;
}
