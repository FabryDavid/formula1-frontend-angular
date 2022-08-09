import {ILapTelemetry} from './ilap-telemetry';

export interface IDriverLapTelemetries {
  [key: string]: Array<ILapTelemetry>;
}
