import {Component, Input, OnInit} from '@angular/core';
import {Session} from "../../../../../enums/session";
import {IDriver} from "../../../../../interfaces/idriver";
import {MaxLapInSessionService} from "../../../../../services/max-laps-in-session-service/max-lap-in-session.service";

@Component({
  selector: 'app-lap-telemetry-header',
  templateUrl: './lap-telemetry-header.component.html',
  styleUrls: ['./lap-telemetry-header.component.scss']
})
export class LapTelemetryHeaderComponent implements OnInit {
  @Input() round!: string | number
  @Input() session!: Session

  isLoading: boolean = false
  selectedLap: number = 1
  maxLap: number = 2
  driversList: Array<IDriver> = []
  selectedDrivers: Array<string> = []

  constructor(private maxLapInSessionService: MaxLapInSessionService) {
  }

  ngOnInit(): void {
    this.maxLapInSessionService.getMaxLapInSession(this.round, this.session).subscribe((data) => {
      this.maxLap = data
    })
  }

}
