import { Component, Input, OnInit } from '@angular/core';
import { IRequestError } from '../../../../interfaces/irequest-error';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  @Input() error: IRequestError | string | null = null;

  message: string = '';

  constructor() {}

  ngOnInit(): void {
    if (typeof this.error === 'string') {
      this.message = this.error;
    } else {
      this.message = (this.error as IRequestError).error.error;
    }
  }
}
