import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from "./home.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {NumberAbsModule} from "../../../pipes/number-abs/number-abs.module";
import {HeroModule} from "./hero/hero.module";
import {UpcomingSessionModule} from "./upcoming-session/upcoming-session.module";
import {StandingsPanelModule} from "./standings-panel/standings-panel.module";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    NumberAbsModule,
    HeroModule,
    UpcomingSessionModule,
    StandingsPanelModule
  ]
})
export class HomeModule {
}
