import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-qatar-flag',
  templateUrl: './qatar-flag.component.html',
  styleUrls: ['./qatar-flag.component.scss']
})
export class QatarFlagComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log("Qatar")
  }

}
