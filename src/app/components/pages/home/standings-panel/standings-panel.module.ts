import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandingsPanelComponent } from './standings-panel.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StandingsPanelComponent],
  imports: [CommonModule, RouterModule],
  exports: [StandingsPanelComponent],
})
export class StandingsPanelModule {}
