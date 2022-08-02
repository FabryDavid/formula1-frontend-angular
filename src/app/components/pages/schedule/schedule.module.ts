import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScheduleRoutingModule} from './schedule-routing.module';
import {ScheduleComponent} from "./schedule.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {ScheduleItemModule} from "./schedule-item/schedule-item.module";
import {PageLoadingIndicatorModule} from "../../shared/page-loading-indicator/page-loading-indicator.module";


@NgModule({
  declarations: [ScheduleComponent],
    imports: [
        CommonModule,
        ScheduleRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        ScheduleItemModule,
        PageLoadingIndicatorModule,
    ]
})
export class ScheduleModule {
}
