import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotspotGroupComponent } from './hotspot-group.component';
import {HotspotModule} from "./hotspot/hotspot.module";



@NgModule({
    declarations: [
        HotspotGroupComponent
    ],
    exports: [
        HotspotGroupComponent
    ],
  imports: [
    CommonModule,
    HotspotModule
  ]
})
export class HotspotGroupModule { }
