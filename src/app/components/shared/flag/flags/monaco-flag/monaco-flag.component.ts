import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monaco-flag',
  templateUrl: './monaco-flag.component.html',
  styleUrls: ['./monaco-flag.component.scss']
})
export class MonacoFlagComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Monaco")
  }

}
