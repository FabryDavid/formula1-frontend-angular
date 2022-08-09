import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss'],
})
export class SwitchButtonComponent implements OnInit {
  @Input() leftValue!: string;
  @Input() rightValue!: string;
  @Input() value!: boolean;

  @Output() valueChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
}
