import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FranceFlagComponent} from "./france-flag.component";


@NgModule({
  declarations: [FranceFlagComponent],
  imports: [
    CommonModule
  ],
  exports: [FranceFlagComponent]
})
export class FranceFlagModule {
}
