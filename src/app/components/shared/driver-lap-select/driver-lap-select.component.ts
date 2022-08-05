import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Session} from "../../../enums/session";
import {ISessionDriver} from "../../../interfaces/isession-driver";
import {MaxLapInSessionService} from "../../../services/max-laps-in-session-service/max-lap-in-session.service";
import {DriversService} from "../../../services/drivers-service/drivers.service";
import {forkJoin} from "rxjs";
import {IDriverLapData} from "../../../interfaces/idriver-lap-data";

@Component({
  selector: 'app-driver-lap-select',
  templateUrl: './driver-lap-select.component.html',
  styleUrls: ['./driver-lap-select.component.scss']
})
export class DriverLapSelectComponent implements OnInit {
  @Input() round!: string | number
  @Input() session!: Session

  @Output() load = new EventEmitter<IDriverLapData>()

  isLoading = false
  selectedLap: number = 1
  maxLap: number = 2
  driversList: Array<ISessionDriver> = []
  selectedDriver: string = ""

  constructor(
    private maxLapInSessionService: MaxLapInSessionService,
    private driversService: DriversService,
  ) {
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
    this.load.emit({
      lap: this.selectedLap,
      driver: this.selectedDriver
    })
  }
}
