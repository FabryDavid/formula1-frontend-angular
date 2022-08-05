import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingSessionCardComponent } from './upcoming-session-card.component';
import { NumberAbsModule } from '../../../../../pipes/number-abs/number-abs.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [UpcomingSessionCardComponent],
  imports: [CommonModule, NumberAbsModule, MatProgressSpinnerModule],
  exports: [UpcomingSessionCardComponent],
})
export class UpcomingSessionCardModule {}
