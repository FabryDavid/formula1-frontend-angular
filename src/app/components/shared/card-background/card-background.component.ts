import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-background',
  templateUrl: './card-background.component.html',
  styleUrls: ['./card-background.component.scss'],
})
export class CardBackgroundComponent implements OnInit {
  @Input() primary!: string;
  @Input() secondary!: string;
  @Input() tertiary!: string;

  maxDelay = 500

  delays = {
    lineDelay1: `${Math.floor(Math.random() * this.maxDelay)}ms`,
    lineDelay2: `${Math.floor(Math.random() * this.maxDelay)}ms`,
    lineDelay3: `${Math.floor(Math.random() * this.maxDelay)}ms`,
    lineDelay4: `${Math.floor(Math.random() * this.maxDelay)}ms`,
    lineDelay5: `${Math.floor(Math.random() * this.maxDelay)}ms`,
    lineDelay6: `${Math.floor(Math.random() * this.maxDelay)}ms`,
    lineDelay7: `${Math.floor(Math.random() * this.maxDelay)}ms`,
    lineDelay8: `${Math.floor(Math.random() * this.maxDelay)}ms`,
    lineDelay9: `${Math.floor(Math.random() * this.maxDelay)}ms`,
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
