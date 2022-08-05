import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-driver-background',
  templateUrl: './driver-background.component.html',
  styleUrls: ['./driver-background.component.scss']
})
export class DriverBackgroundComponent implements OnInit {
  @Input() primary!: string
  @Input() secondary!: string
  @Input() tertiary!: string
  @Input() number!: string

  constructor() {
  }

  ngOnInit(): void {
  }

}
