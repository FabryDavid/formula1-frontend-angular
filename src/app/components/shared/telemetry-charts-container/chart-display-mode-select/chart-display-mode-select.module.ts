import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartDisplayModeSelectComponent} from './chart-display-mode-select.component';
import {SwitchButtonModule} from '../../switch-button/switch-button.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ChartDisplayModeSelectComponent],
  imports: [
    CommonModule,
    SwitchButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
  ],
  exports: [ChartDisplayModeSelectComponent],
})
export class ChartDisplayModeSelectModule {}
