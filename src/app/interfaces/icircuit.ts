import {ILocation} from "./ilocation";

export interface ICircuit {
  circuitId: string,
  circuitName: string,
  Location: ILocation,
  url: string
}
