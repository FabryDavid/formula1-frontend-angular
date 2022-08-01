import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsPanelComponent} from "./news-panel.component";
import {RouterModule} from "@angular/router";
import {NgxTwitterWidgetsModule} from "ngx-twitter-widgets";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [NewsPanelComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxTwitterWidgetsModule,
    MatProgressSpinnerModule
  ],
  exports: [NewsPanelComponent]
})
export class NewsPanelModule {
}
