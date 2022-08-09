import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHotspotItem} from '../../../../../../interfaces/ihotspot-item';
import {HotspotAlign} from '../../../../../../enums/hotspot-align';

@Component({
  selector: 'app-hotspot',
  templateUrl: './hotspot.component.html',
  styleUrls: ['./hotspot.component.scss'],
})
export class HotspotComponent implements OnInit {
  @Input() item!: IHotspotItem;
  @Input() show: boolean = false;

  @Output() showChange = new EventEmitter<boolean>();

  get showHotspot() {
    return this.show;
  }

  set showHotspot(value) {
    this.showChange.emit(value);
  }

  get position() {
    return this.item.position ? this.item.position : HotspotAlign.TOP_ALIGN;
  }

  constructor() {}

  ngOnInit(): void {}
}
