import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-open-close-button',
  templateUrl: './open-close-button.component.html',
  styleUrls: ['./open-close-button.component.scss'],
})
export class OpenCloseButtonComponent implements OnInit {
  @Input() opened!: boolean;

  @Output() openedChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
}
