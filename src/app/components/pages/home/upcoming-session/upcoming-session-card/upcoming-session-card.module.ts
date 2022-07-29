import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UpcomingSessionCardComponent} from "./upcoming-session-card.component";


@NgModule({
  declarations: [UpcomingSessionCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UpcomingSessionCardComponent
  ]
})
export class UpcomingSessionCardModule {
}
