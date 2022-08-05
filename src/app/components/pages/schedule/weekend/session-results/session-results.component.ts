import {Component, Input, OnInit} from '@angular/core';
import {ISessionTime} from "../../../../../interfaces/isession-time";
import {SessionResultsService} from "../../../../../services/session-results-service/session-results.service";
import {Session} from "../../../../../enums/session";
import {ISessionResult} from "../../../../../interfaces/isession-result";

@Component({
  selector: 'app-session-results',
  templateUrl: './session-results.component.html',
  styleUrls: ['./session-results.component.scss']
})
export class SessionResultsComponent implements OnInit {
  @Input() round!: string | number;
  @Input() session!: Session;
  @Input() sessionDate!: ISessionTime;

  isLoading = false
  sessionResults: Array<ISessionResult> = []
  navigationOptions: Array<string> = [
    'Result',
    'Chart',
    'Telemetry Chats',
    'Gearshifts',
    'Speed',
    'Tyre Usage',
  ]
  activeTab = 4

  constructor(private sessionResultsService: SessionResultsService) {
  }

  ngOnInit(): void {
    this.isLoading = true
    this.sessionResultsService.getSessionResults(this.round, this.session).subscribe((data) => {
      this.sessionResults = data
      this.isLoading = false
    })
  }

}
