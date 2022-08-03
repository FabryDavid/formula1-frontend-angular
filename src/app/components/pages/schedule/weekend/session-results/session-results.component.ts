import {Component, Input, OnInit} from '@angular/core';
import {ISessionTime} from "../../../../../interfaces/isession-time";
import {SessionResultsService} from "../../../../../services/session-results-service/session-results.service";
import {Session} from "../../../../../enums/session";
import {ISessionResult} from "../../../../../interfaces/isession-result";
import {IRouterItem} from "../../../../../interfaces/irouter-item";

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
  navigationOptions: Array<IRouterItem> = [
    {name: 'Result', url: 'result'},
    {name: 'Chart', url: 'chart'},
    {name: 'Telemetry Chats', url: 'telemetry'},
    {name: 'Gearshifts', url: 'gears'},
    {name: 'Speed', url: 'speed'},
    {name: 'Tyre Strategies', url: 'tyre'},
  ]

  constructor(private sessionResultsService: SessionResultsService) {
  }

  ngOnInit(): void {
    this.isLoading = true
    this.sessionResultsService.getSessionResults(this.round, this.session).subscribe((data) => {
      console.log(data)
      this.sessionResults = data

      this.isLoading = false
    })
  }

}
