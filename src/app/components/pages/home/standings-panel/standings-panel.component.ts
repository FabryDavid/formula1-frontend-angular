import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-standings-panel',
  templateUrl: './standings-panel.component.html',
  styleUrls: ['./standings-panel.component.scss'],
})
export class StandingsPanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:mousemove', ['$event'])
  parallax(e: any) {
    document.querySelectorAll('.layer').forEach((layer) => {
      const speedAtr = layer.getAttribute('data-speed');
      const speed = speedAtr ? parseFloat(speedAtr) : 1;
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      (
        layer as HTMLElement
      ).style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
}
