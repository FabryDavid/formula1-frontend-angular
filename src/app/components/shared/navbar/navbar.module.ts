import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { OpenCloseButtonComponent } from './open-close-button/open-close-button.component';
import { CardBackgroundModule } from '../card-background/card-background.module';

@NgModule({
  declarations: [NavbarComponent, OpenCloseButtonComponent],
  imports: [CommonModule, RouterModule, CardBackgroundModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
