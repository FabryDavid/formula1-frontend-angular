import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UpcomingSessionComponent} from "./upcoming-session.component";


@NgModule({
  declarations: [UpcomingSessionComponent],
  imports: [
    CommonModule
  ],
  exports: [UpcomingSessionComponent]
})
export class UpcomingSessionModule {
}
