import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SingaporeFlagComponent} from "./singapore-flag.component";


@NgModule({
  declarations: [SingaporeFlagComponent],
  imports: [
    CommonModule
  ],
  exports: [SingaporeFlagComponent]
})
export class SingaporeFlagModule {
}
