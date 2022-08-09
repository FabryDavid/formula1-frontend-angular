import { TireCompound } from '../enums/tire-compound';
import { Timing } from '../classes/timing/timing';

export interface ILapTelemetry {
  color: string;
  driverCode: string;
  driverFullName: string;
  driverId: string;
  driverNumber: number;
  freshTyre: null | boolean;
  lapNumber: number;
  lapStartTime: null | Timing;
  lapTime: null | Timing;
  sector1SessionTime: null | Timing;
  sector1Time: null | Timing;
  sector2SessionTime: null | Timing;
  sector2Time: null | Timing;
  sector3SessionTime: null | Timing;
  sector3Time: null | Timing;
  speedFL: null | number;
  speedI1: null | number;
  speedI2: null | number;
  speedST: null | number;
  stint: number;
  team: string;
  time: Timing;
  tireLife: null | number;
  trackStatus: number;
  tyreCompound: null | TireCompound;
}
