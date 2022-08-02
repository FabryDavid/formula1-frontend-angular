import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-belgium-flag',
  templateUrl: './belgium-flag.component.html',
  styleUrls: ['./belgium-flag.component.scss']
})
export class BelgiumFlagComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log("Belgium")
  }

}
