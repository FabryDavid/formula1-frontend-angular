import {Component, Input, OnInit} from '@angular/core';
import {Session} from "../../../enums/session";
import {SafeUrl} from "@angular/platform-browser";
import {TelemetryServiceService} from "../../../services/telemetry-service/telemetry-service.service";
import {IDriverLapData} from "../../../interfaces/idriver-lap-data";

@Component({
  selector: 'app-speed-map-telemetry',
  templateUrl: './speed-map-telemetry.component.html',
  styleUrls: ['./speed-map-telemetry.component.scss']
})
export class SpeedMapTelemetryComponent implements OnInit {
  @Input() round!: string | number
  @Input() session!: Session

  speedImage: SafeUrl | null = null
  message = ""
  isLoading = false

  constructor(private telemetryService: TelemetryServiceService) {
  }

  ngOnInit(): void {
  }

  loadSpeedMap(data: IDriverLapData) {
    this.isLoading = true
    this.telemetryService.getSpeedMap(this.round, this.session, data.lap, data.driver).subscribe((data) => {
        this.speedImage = data.data
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
