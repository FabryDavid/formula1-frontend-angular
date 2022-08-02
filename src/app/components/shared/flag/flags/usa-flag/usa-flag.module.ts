import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsaFlagComponent} from "./usa-flag.component";


@NgModule({
  declarations: [UsaFlagComponent],
  imports: [
    CommonModule
  ],
  exports: [UsaFlagComponent]
})
export class UsaFlagModule {
}
