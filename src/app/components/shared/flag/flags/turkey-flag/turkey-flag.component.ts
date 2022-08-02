import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-turkey-flag',
  templateUrl: './turkey-flag.component.html',
  styleUrls: ['./turkey-flag.component.scss']
})
export class TurkeyFlagComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log("Turkey")
  }

}
