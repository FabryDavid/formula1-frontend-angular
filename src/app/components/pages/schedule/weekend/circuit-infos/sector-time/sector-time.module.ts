import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectorTimeComponent } from './sector-time.component';
import { SectorColorModule } from '../../../../../../pipes/sector-color/sector-color.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [SectorTimeComponent],
  imports: [CommonModule, SectorColorModule, MatProgressSpinnerModule],
  exports: [SectorTimeComponent],
})
export class SectorTimeModule {}
