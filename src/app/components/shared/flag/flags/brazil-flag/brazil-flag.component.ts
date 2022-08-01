import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-brazil-flag',
  templateUrl: './brazil-flag.component.html',
  styleUrls: ['./brazil-flag.component.scss']
})
export class BrazilFlagComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log("Brazil")
  }

}
