import {Component, Input, OnInit} from '@angular/core';
import {Session} from "../../../enums/session";
import {TelemetryServiceService} from "../../../services/telemetry-service/telemetry-service.service";
import {IDriverLapData} from "../../../interfaces/idriver-lap-data";
import {SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-gear-shifts-telemetry',
  templateUrl: './gear-shifts-telemetry.component.html',
  styleUrls: ['./gear-shifts-telemetry.component.scss']
})
export class GearShiftsTelemetryComponent implements OnInit {
  @Input() round!: string | number
  @Input() session!: Session

  gearshiftsImage: SafeUrl | null = null
  message = ""
  isLoading = false

  constructor(private telemetryService: TelemetryServiceService) {
  }

  ngOnInit(): void {
  }

  loadGearshifts(data: IDriverLapData) {
    this.isLoading = true
    this.telemetryService.getGearshifts(this.round, this.session, data.lap, data.driver).subscribe((data) => {
        this.gearshiftsImage = data.data
      },
      () => {
        this.message = "No data found for this driver and lap combination";
        this.isLoading = false
      },
      () => {
        this.isLoading = false
      }
    )
  }
}
