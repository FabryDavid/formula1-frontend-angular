import {Component, Input, OnInit} from '@angular/core';
import {DriverImageService} from "../../../../services/driver-image-service/driver-image.service";
import {IRaceResult} from "../../../../interfaces/irace-result";
import getNumberTextSuffix from "../../../../helpers/getNumberTextSuffix";
import {faMinus, faSortDown, faSortUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-race-result-card',
  templateUrl: './race-result-card.component.html',
  styleUrls: ['./race-result-card.component.scss']
})
export class RaceResultCardComponent implements OnInit {
  @Input() result!: IRaceResult

  isExpanded = false
  driverImage: any = null
  getNumberTextSuffix = getNumberTextSuffix
  driverFullName!: string
  positionFromStart!: number
  gainedPositionsAbs!: number
  faSortUp = faSortUp
  faSortDown = faSortDown
  faMinus = faMinus

  constructor(private driverImageService: DriverImageService) {
  }

  ngOnInit(): void {
    this.driverFullName = `${this.result.driver.driver.givenName} ${this.result.driver.driver.familyName}`
    this.positionFromStart = this.result.grid - this.result.position
    this.gainedPositionsAbs = Math.abs(this.positionFromStart)

    this.driverImageService.getDriverImage(this.result.driver.driver.driverId).subscribe((data) => {
      this.driverImage = data
    })
  }
}
