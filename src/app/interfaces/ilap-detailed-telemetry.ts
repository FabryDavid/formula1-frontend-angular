import {ITelemetryCarData} from "./itelemetry-car-data";

export interface ILapDetailedTelemetry {
  driverId: string;
  color: string;
  driverFullName: string,
  team: string;
  carData: ITelemetryCarData;
}
