import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlagHostDirective} from "./flag-host.directive";


@NgModule({
  declarations: [FlagHostDirective],
  imports: [
    CommonModule
  ],
  exports: [FlagHostDirective]
})
export class FlagHostModule {
}
