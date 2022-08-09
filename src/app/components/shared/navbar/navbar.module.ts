import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { CardBackgroundModule } from '../card-background/card-background.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OpenCloseButtonModule } from './open-close-button/open-close-button.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    CardBackgroundModule,
    MatTooltipModule,
    FontAwesomeModule,
    OpenCloseButtonModule,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
