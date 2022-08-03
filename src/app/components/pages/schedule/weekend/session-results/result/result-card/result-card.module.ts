import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultCardComponent} from './result-card.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [
    ResultCardComponent
  ],
    imports: [
        CommonModule,
        MatExpansionModule,
        MatButtonModule,
        MatTooltipModule
    ],
  exports: [ResultCardComponent]
})
export class ResultCardModule {
}
