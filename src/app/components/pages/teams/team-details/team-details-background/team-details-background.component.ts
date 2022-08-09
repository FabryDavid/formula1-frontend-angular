import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-details-background',
  templateUrl: './team-details-background.component.html',
  styleUrls: ['./team-details-background.component.scss'],
})
export class TeamDetailsBackgroundComponent implements OnInit {
  @Input() primary!: string;
  @Input() secondary!: string;
  @Input() tertiary!: string;

  constructor() {}

  ngOnInit(): void {}
}
