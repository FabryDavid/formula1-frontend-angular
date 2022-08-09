import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Session } from '../../../../../enums/session';
import { TelemetryServiceService } from '../../../../../services/telemetry-service/telemetry-service.service';
import { ILapDetailedTelemetry } from '../../../../../interfaces/ilap-detailed-telemetry';
import { IDriverLapData } from '../../../../../interfaces/idriver-lap-data';

@Component({
  selector: 'app-lap-telemetry-header',
  templateUrl: './lap-telemetry-header.component.html',
  styleUrls: ['./lap-telemetry-header.component.scss'],
})
export class LapTelemetryHeaderComponent implements OnInit {
  @Input() round!: string | number;
  @Input() session!: Session;

  @Output() telemetryData = new EventEmitter<Array<ILapDetailedTelemetry>>();
  @Output() isLoadingChange = new EventEmitter<boolean>();

  isLoadingValue: boolean = false;

  get isLoading(): boolean {
    return this.isLoadingValue;
  }

  set isLoading(value) {
    this.isLoadingValue = value;
    this.isLoadingChange.emit(value);
  }

  constructor(private telemetryService: TelemetryServiceService) {}

  ngOnInit(): void {}

  loadLapData(data: IDriverLapData) {
    this.isLoading = true;

    const driver =
      typeof data.driver === 'string' ? [data.driver] : data.driver;

    this.telemetryService
      .getSessionSingleLapTelemetry(this.round, this.session, data.lap, driver)
      .subscribe((data) => {
        this.telemetryData.emit(data);
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
