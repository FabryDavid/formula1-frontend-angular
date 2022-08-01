import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import clamp from "../../../../helpers/clamp";

@Component({
  selector: 'app-telemetry-panel',
  templateUrl: './telemetry-panel.component.html',
  styleUrls: ['./telemetry-panel.component.scss']
})
export class TelemetryPanelComponent implements OnInit {
  @ViewChild("parent") parent: ElementRef | undefined;
  @ViewChild("mobileCar") mobileCar: ElementRef | undefined;
  mobileCarOffset: number = 100

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ["$event"])
  onScroll() {
    if (!this.mobileCar || !this.parent) {
      return
    }

    const parentElement = this.parent.nativeElement
    const carElement = this.mobileCar.nativeElement

    const documentScrollTop = document.documentElement.scrollTop
    const visibleBottom = documentScrollTop + window.innerHeight

    const parentElementOffsetTop = parentElement.offsetTop
    const parentElementHeight = parentElement.offsetHeight

    const carTopPosition = carElement.offsetTop + parentElementOffsetTop
    const parentElementOffsetBottom = parentElementOffsetTop + parentElementHeight

    const visiblePercentage = this.percentage(visibleBottom, carTopPosition, parentElementOffsetBottom) * 100
    this.mobileCarOffset = 100 - clamp(Math.round(visiblePercentage), 0, 100)
  }

  percentage(x: number, a: number, b: number): number {
    const t1 = x - a
    const t2 = b - a

    return t1 / t2
  }
}
