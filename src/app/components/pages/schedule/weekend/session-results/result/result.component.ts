import {Component, Input, OnInit} from '@angular/core';
import {ISessionResult} from "../../../../../../interfaces/isession-result";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() sessionResults!: Array<ISessionResult>

  constructor() {
  }

  ngOnInit(): void {
  }

}
