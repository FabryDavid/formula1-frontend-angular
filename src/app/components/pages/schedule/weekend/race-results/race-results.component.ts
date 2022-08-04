import {Component, Input, OnInit} from '@angular/core';
import {ISessionTime} from "../../../../../interfaces/isession-time";
import {ISessionResult} from "../../../../../interfaces/isession-result";
import {RaceResultService} from "../../../../../services/race-result-service/race-result.service";
import {Session} from "../../../../../enums/session";
import {IRaceResult} from "../../../../../interfaces/irace-result";

@Component({
  selector: 'app-race-results',
  templateUrl: './race-results.component.html',
  styleUrls: ['./race-results.component.scss']
})
export class RaceResultsComponent implements OnInit {
  @Input() round!: number;
  @Input() sessionDate!: ISessionTime;

  isLoading = false
  raceResults: Array<IRaceResult> = []
  navigationOptions: Array<string> = [
    'Result',
    'Chart',
    'Telemetry Chats',
    'Gearshifts',
    'Speed',
    'Tyre Strategies',
  ]
  activeTab = 0
  session = Session

  constructor(private raceResultService: RaceResultService) {
  }

  ngOnInit(): void {
    this.isLoading = true
    this.raceResultService.getRaceResult(this.round).subscribe((result) => {
      this.raceResults = result

      this.isLoading = false
    })
  }

}
