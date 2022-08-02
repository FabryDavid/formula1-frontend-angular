import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-france-flag',
  templateUrl: './france-flag.component.html',
  styleUrls: ['./france-flag.component.scss']
})
export class FranceFlagComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("France")
  }

}
