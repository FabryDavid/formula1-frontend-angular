import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TurkeyFlagComponent} from "./turkey-flag.component";


@NgModule({
  declarations: [TurkeyFlagComponent],
  imports: [
    CommonModule
  ],
  exports: [TurkeyFlagComponent]
})
export class TurkeyFlagModule {
}
