import {HotspotAlign} from '../enums/hotspot-align';

export interface IHotspotItem {
  color: string;
  secondaryColor: string;
  left: number;
  top: number;
  title: string;
  text: string;
  position?: HotspotAlign;
}
