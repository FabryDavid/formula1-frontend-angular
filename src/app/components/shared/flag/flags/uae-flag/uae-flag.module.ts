import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UaeFlagComponent} from "./uae-flag.component";


@NgModule({
  declarations: [UaeFlagComponent],
  imports: [
    CommonModule
  ],
  exports: [UaeFlagComponent]
})
export class UaeFlagModule {
}
