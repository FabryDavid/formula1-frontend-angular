import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsRoutingModule} from './news-routing.module';
import {NewsComponent} from './news.component';
import {NgxMasonryModule} from 'ngx-masonry';
import {NgxTwitterWidgetsModule} from "ngx-twitter-widgets";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    NgxMasonryModule,
    NgxTwitterWidgetsModule,
    MatProgressSpinnerModule
  ]
})
export class NewsModule {
}
