import { Timing } from '../classes/timing/timing';

export interface ITelemetryCarData {
  brake: Array<number>;
  throttle: Array<number>;
  drs: Array<number>;
  distance: Array<number>;
  rpm: Array<number>;
  sessionTime: Array<Timing>;
  speed: Array<number>;
  gear: Array<number>;
  distanceToDriverAhead: Array<null | number>;
  driverAhead: Array<string>;
}
