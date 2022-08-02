import {Component, Input, OnInit} from '@angular/core';
import {ICircuit} from "../../../../../interfaces/icircuit";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() circuit!: ICircuit
  @Input() seasonYear? = 2022

  constructor() {
  }

  ngOnInit(): void {
  }

}
