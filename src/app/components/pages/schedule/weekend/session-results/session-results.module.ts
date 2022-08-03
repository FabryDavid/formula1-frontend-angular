import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SessionResultsComponent} from './session-results.component';
import {LeftSideTabsModule} from "../left-side-tabs/left-side-tabs.module";
import {LoadingModule} from "../../../../shared/page-loading-indicator/loading/loading.module";


@NgModule({
  declarations: [
    SessionResultsComponent
  ],
    imports: [
        CommonModule,
        LeftSideTabsModule,
        LoadingModule
    ],
  exports: [SessionResultsComponent]
})
export class SessionResultsModule {
}
