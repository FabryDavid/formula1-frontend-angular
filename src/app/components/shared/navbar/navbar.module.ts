import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { OpenCloseButtonComponent } from './open-close-button/open-close-button.component';
import { CardBackgroundModule } from '../card-background/card-background.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [NavbarComponent, OpenCloseButtonComponent],
  imports: [
    CommonModule,
    RouterModule,
    CardBackgroundModule,
    MatTooltipModule,
    FontAwesomeModule,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
