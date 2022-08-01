import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-portugal-flag',
  templateUrl: './portugal-flag.component.html',
  styleUrls: ['./portugal-flag.component.scss']
})
export class PortugalFlagComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log("Portugal")
  }

}
