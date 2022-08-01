import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-spain-flag',
  templateUrl: './spain-flag.component.html',
  styleUrls: ['./spain-flag.component.scss']
})
export class SpainFlagComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log("Spain")
  }

}
