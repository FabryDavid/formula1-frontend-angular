import {Component, Input, OnInit} from '@angular/core';
import {IHotspotItem} from "../../../../../interfaces/ihotspot-item";

@Component({
  selector: 'app-hotspot-group',
  templateUrl: './hotspot-group.component.html',
  styleUrls: ['./hotspot-group.component.scss']
})
export class HotspotGroupComponent implements OnInit {
  @Input() items: Array<IHotspotItem> = []
  @Input() allowMultipleOpen?: boolean = false

  open: Array<boolean> = []

  constructor() {
  }

  ngOnInit(): void {
    this.items.forEach(() => {
      this.open.push(false)
    })
  }

  openItem(index: number) {
    if (this.allowMultipleOpen) {
      this.open[index] = true;
      return;
    }

    for (let i = 0; i < this.open.length; i++) {
      if (this.open[i] && i !== index) {
        this.open[i] = false;
      }
    }
  }
}
