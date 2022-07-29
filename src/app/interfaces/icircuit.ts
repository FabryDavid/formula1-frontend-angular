import {ILocation} from "./ilocation";

export interface ICircuit {
  circuitId: string,
  circuitName: string,
  location: ILocation,
  url: string
}
