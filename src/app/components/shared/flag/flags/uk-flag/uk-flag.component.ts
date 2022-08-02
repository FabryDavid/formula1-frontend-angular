import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-uk-flag',
  templateUrl: './uk-flag.component.html',
  styleUrls: ['./uk-flag.component.scss']
})
export class UkFlagComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log("UK")
  }

}
