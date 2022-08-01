import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsPanelComponent} from "./news-panel.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [NewsPanelComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NewsPanelComponent]
})
export class NewsPanelModule {
}
