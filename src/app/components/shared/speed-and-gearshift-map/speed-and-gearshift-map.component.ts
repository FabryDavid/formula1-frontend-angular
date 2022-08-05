import {Component, Input, OnInit} from '@angular/core';
import {Session} from "../../../enums/session";
import {SafeUrl} from "@angular/platform-browser";
import {TelemetryServiceService} from "../../../services/telemetry-service/telemetry-service.service";
import {IDriverLapData} from "../../../interfaces/idriver-lap-data";

@Component({
  selector: 'app-speed-and-gearshift-map',
  templateUrl: './speed-and-gearshift-map.component.html',
  styleUrls: ['./speed-and-gearshift-map.component.scss']
})
export class SpeedAndGearshiftMapComponent implements OnInit {
  @Input() round!: string | number
  @Input() session!: Session
  @Input() mode!: "gearshift" | "speed"

  imageUrl: SafeUrl | null = null
  message = ""
  isLoading = false

  constructor(private telemetryService: TelemetryServiceService) {
  }

  ngOnInit(): void {
  }

  loadMap(data: IDriverLapData) {
    this.isLoading = true

    if (this.mode === "speed") {
      this.telemetryService.getSpeedMap(this.round, this.session, data.lap, data.driver).subscribe((data) => {
          this.imageUrl = data.data
        },
        () => this.handleError(),
        () => {
          this.isLoading = false
        }
      )
    } else {
      this.telemetryService.getGearshifts(this.round, this.session, data.lap, data.driver).subscribe((data) => {
          this.imageUrl = data.data
        },
        () => this.handleError(),
        () => {
          this.isLoading = false
        }
      )
    }
  }

  handleError() {
    this.message = "No data found for this driver and lap combination";
    this.isLoading = false
  }
}
