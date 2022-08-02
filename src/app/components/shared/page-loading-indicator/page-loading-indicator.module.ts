import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageLoadingIndicatorComponent} from "./page-loading-indicator.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [PageLoadingIndicatorComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [PageLoadingIndicatorComponent]
})
export class PageLoadingIndicatorModule {
}
