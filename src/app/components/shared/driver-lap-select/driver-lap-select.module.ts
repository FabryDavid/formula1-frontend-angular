import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DriverLapSelectComponent} from './driver-lap-select.component';
import {LoadingModule} from "../page-loading-indicator/loading/loading.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatSliderModule} from "@angular/material/slider";


@NgModule({
  declarations: [
    DriverLapSelectComponent
  ],
  imports: [
    CommonModule,
    LoadingModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatSliderModule
  ],
  exports: [
    DriverLapSelectComponent
  ]
})
export class DriverLapSelectModule {
}
