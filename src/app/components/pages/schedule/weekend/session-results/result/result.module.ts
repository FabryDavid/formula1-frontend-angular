import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';
import { ResultCardModule } from './result-card/result-card.module';

@NgModule({
  declarations: [ResultComponent],
  imports: [CommonModule, ResultCardModule],
  exports: [ResultComponent],
})
export class ResultModule {}
