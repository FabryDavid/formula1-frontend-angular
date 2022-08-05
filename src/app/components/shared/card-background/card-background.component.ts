import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-background',
  templateUrl: './card-background.component.html',
  styleUrls: ['./card-background.component.scss'],
})
export class CardBackgroundComponent implements OnInit {
  @Input() primary!: string;
  @Input() secondary!: string;
  @Input() tertiary!: string;

  constructor() {}

  ngOnInit(): void {}
}
