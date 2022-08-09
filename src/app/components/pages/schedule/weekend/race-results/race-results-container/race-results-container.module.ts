import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RaceResultsContainerComponent} from './race-results-container.component';
import {RaceResultCardModule} from '../../../../../shared/result/race-result-card/race-result-card.module';

@NgModule({
  declarations: [RaceResultsContainerComponent],
  imports: [CommonModule, RaceResultCardModule],
  exports: [RaceResultsContainerComponent],
})
export class RaceResultsContainerModule {}
