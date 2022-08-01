import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BahrainFlagComponent } from './bahrain-flag.component';



@NgModule({
  declarations: [
    BahrainFlagComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[BahrainFlagComponent]
})
export class BahrainFlagModule { }
