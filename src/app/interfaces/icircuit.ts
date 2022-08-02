import {ILocation} from "./ilocation";
import {ICircuitDetails} from "./icircuit-details";

export interface ICircuit {
  circuitId: string,
  circuitName: string,
  Location: ILocation,
  url: string,
  details: null | ICircuitDetails
}
