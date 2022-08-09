import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectorColorPipe} from './sector-color.pipe';

@NgModule({
  declarations: [SectorColorPipe],
  imports: [CommonModule],
  exports: [SectorColorPipe],
})
export class SectorColorModule {}
