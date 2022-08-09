import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlagContainerComponent } from './flag-container.component';
import { FlagHostModule } from '../flag-host/flag-host.module';

@NgModule({
  declarations: [FlagContainerComponent],
  imports: [CommonModule, FlagHostModule],
  exports: [FlagContainerComponent],
})
export class FlagContainerModule {}
