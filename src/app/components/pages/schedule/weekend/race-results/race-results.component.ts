import {Component, Input, OnInit} from '@angular/core';
import {ISessionTime} from "../../../../../interfaces/isession-time";
import {ISessionResult} from "../../../../../interfaces/isession-result";
import {RaceResultService} from "../../../../../services/race-result-service/race-result.service";

@Component({
  selector: 'app-race-results',
  templateUrl: './race-results.component.html',
  styleUrls: ['./race-results.component.scss']
})
export class RaceResultsComponent implements OnInit {
  @Input() round!: number;
  @Input() sessionDate!: ISessionTime;

  isLoading = false
  raceResults: Array<ISessionResult> = []
  navigationOptions: Array<string> = [
    'Result',
    'Chart',
    'Telemetry Chats',
    'Gearshifts',
    'Speed',
    'Tyre Strategies',
  ]
  activeTab = 0

  constructor(private raceResultService: RaceResultService) {
  }

  ngOnInit(): void {
    this.raceResultService.getRaceResult(this.round).subscribe((result) => {
      console.log(result)
    })
  }

}
