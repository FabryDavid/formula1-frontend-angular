import {Component, Input, OnInit} from '@angular/core';
import {IRaceResult} from '../../../../../../interfaces/irace-result';

@Component({
  selector: 'app-race-results-container',
  templateUrl: './race-results-container.component.html',
  styleUrls: ['./race-results-container.component.scss'],
})
export class RaceResultsContainerComponent implements OnInit {
  @Input() raceResults!: Array<IRaceResult>;

  constructor() {}

  ngOnInit(): void {}
}
