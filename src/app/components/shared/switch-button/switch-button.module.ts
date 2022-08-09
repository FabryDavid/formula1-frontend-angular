import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchButtonComponent } from './switch-button.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SwitchButtonComponent],
  imports: [CommonModule, MatSlideToggleModule, FormsModule],
  exports: [SwitchButtonComponent],
})
export class SwitchButtonModule {}
