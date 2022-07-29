import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardBackgroundComponent} from "./card-background.component";


@NgModule({
  declarations: [CardBackgroundComponent],
  imports: [
    CommonModule
  ],
  exports: [CardBackgroundComponent]
})
export class CardBackgroundModule {
}
