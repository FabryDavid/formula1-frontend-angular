import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceResultCardComponent } from './race-result-card.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [RaceResultCardComponent],
  exports: [RaceResultCardComponent],
  imports: [CommonModule, MatExpansionModule, FontAwesomeModule],
})
export class RaceResultCardModule {}
