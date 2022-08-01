import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from "./home.component";
import { HeroComponent } from './hero/hero.component';
import { UpcomingSessionComponent } from './upcoming-session/upcoming-session.component';
import { UpcomingSessionCardComponent } from './upcoming-session/upcoming-session-card/upcoming-session-card.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {NumberAbsModule} from "../../../pipes/number-abs/number-abs.module";


@NgModule({
  declarations: [HomeComponent, HeroComponent, UpcomingSessionComponent, UpcomingSessionCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    NumberAbsModule
  ]
})
export class HomeModule {
}
