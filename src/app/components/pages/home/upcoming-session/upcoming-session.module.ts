import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UpcomingSessionComponent} from "./upcoming-session.component";
import {UpcomingSessionCardModule} from "./upcoming-session-card/upcoming-session-card.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [UpcomingSessionComponent],
  imports: [
    CommonModule,
    UpcomingSessionCardModule,
    RouterModule
  ],
  exports: [UpcomingSessionComponent]
})
export class UpcomingSessionModule {
}
