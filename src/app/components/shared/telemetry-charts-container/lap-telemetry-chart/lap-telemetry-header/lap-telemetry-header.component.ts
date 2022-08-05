import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Session} from "../../../../../enums/session";
import {MaxLapInSessionService} from "../../../../../services/max-laps-in-session-service/max-lap-in-session.service";
import {DriversService} from "../../../../../services/drivers-service/drivers.service";
import {ISessionDriver} from "../../../../../interfaces/isession-driver";
import {TelemetryServiceService} from "../../../../../services/telemetry-service/telemetry-service.service";
import {ILapDetailedTelemetry} from "../../../../../interfaces/ilap-detailed-telemetry";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-lap-telemetry-header',
  templateUrl: './lap-telemetry-header.component.html',
  styleUrls: ['./lap-telemetry-header.component.scss']
})
export class LapTelemetryHeaderComponent implements OnInit {
  @Input() round!: string | number
  @Input() session!: Session

  @Output() telemetryData = new EventEmitter<Array<ILapDetailedTelemetry>>()
  @Output() isLoadingChange = new EventEmitter<boolean>()

  selectedLap: number = 1
  maxLap: number = 2
  driversList: Array<ISessionDriver> = []
  selectedDrivers: Array<string> = []
  isLoadingValue: boolean = false

  get isLoading(): boolean {
    return this.isLoadingValue
  }

  set isLoading(value) {
    this.isLoadingValue = value
    this.isLoadingChange.emit(value)
  }

  constructor(
    private maxLapInSessionService: MaxLapInSessionService,
    private driversService: DriversService,
    private telemetryService: TelemetryServiceService) {
  }

  ngOnInit(): void {
    this.isLoading = true

    forkJoin({
      maxLaps: this.maxLapInSessionService.getMaxLapInSession(this.round, this.session),
      drivers: this.driversService.getSessionDrivers(this.round, this.session)
    }).subscribe((data) => {
      this.maxLap = data.maxLaps

      data.drivers.sort((a, b) => {
        const aTeam = a.team;
        const bTeam = b.team;

        if (aTeam === bTeam) {
          const aName = a.fullName;
          const bName = b.fullName;

          return aName > bName ? 1 : -1;
        }

        return aTeam > bTeam ? 1 : -1;
      });

      this.driversList = data.drivers;

      this.isLoading = false
    })
  }


  loadLapData() {
    this.isLoading = true
    this.telemetryService.getSessionSingleLapTelemetry(
      this.round,
      this.session,
      this.selectedLap,
      this.selectedDrivers
    ).subscribe((data) => {
      this.telemetryData.emit(data)

      this.isLoading = false
    })
  }
}
