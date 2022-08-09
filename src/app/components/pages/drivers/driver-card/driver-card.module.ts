import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DriverCardComponent} from './driver-card.component';
import {RouterModule} from '@angular/router';
import {CardBackgroundModule} from '../../../shared/card-background/card-background.module';

@NgModule({
  declarations: [DriverCardComponent],
  exports: [DriverCardComponent],
  imports: [CommonModule, RouterModule, CardBackgroundModule],
})
export class DriverCardModule {}
