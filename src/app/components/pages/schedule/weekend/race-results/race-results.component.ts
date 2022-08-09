import { Component, Input, OnInit } from '@angular/core';
import { ISessionTime } from '../../../../../interfaces/isession-time';
import { RaceResultService } from '../../../../../services/race-result-service/race-result.service';
import { Session } from '../../../../../enums/session';
import { IRaceResult } from '../../../../../interfaces/irace-result';
import { IRequestError } from '../../../../../interfaces/irequest-error';

@Component({
  selector: 'app-race-results',
  templateUrl: './race-results.component.html',
  styleUrls: ['./race-results.component.scss'],
})
export class RaceResultsComponent implements OnInit {
  @Input() round!: number;
  @Input() sessionDate!: ISessionTime;

  isLoading = false;
  error: IRequestError | string | null = null;
  raceResults: Array<IRaceResult> = [];
  navigationOptions: Array<string> = [
    'Result',
    'Chart',
    'Telemetry Chats',
    'Gearshifts',
    'Speed',
  ];
  activeTab = 0;
  session = Session;

  constructor(private raceResultService: RaceResultService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.raceResultService
      .getRaceResult(this.round)
      .subscribe(
        (data) => {
          this.raceResults = data;
        },
        (error) => {
          this.error = error as IRequestError;
        }
      )
      .add(() => {
        this.isLoading = false;
      });
  }
}
