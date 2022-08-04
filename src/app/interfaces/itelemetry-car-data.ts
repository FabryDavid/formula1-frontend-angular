import {Timing} from "../classes/timing/timing";

export interface ITelemetryCarData {
  brake: number;
  drs: number;
  distance: number;
  rpm: number;
  sessionTime: Timing;
  speed: number;
  gear: number;
}
