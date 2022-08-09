import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NumberAbsPipe} from './number-abs.pipe';

@NgModule({
  declarations: [NumberAbsPipe],
  imports: [CommonModule],
  exports: [NumberAbsPipe],
})
export class NumberAbsModule {}
