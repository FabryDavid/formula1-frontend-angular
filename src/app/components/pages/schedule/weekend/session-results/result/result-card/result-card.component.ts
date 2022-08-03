import {Component, Input, OnInit} from '@angular/core';
import {ISessionResult} from "../../../../../../../interfaces/isession-result";
import getNumberTextSuffix from "../../../../../../../helpers/getNumberTextSuffix";
import {DriverImageService} from "../../../../../../../services/driver-image-service/driver-image.service";
import getTyreCompoundImage from "../../../../../../../helpers/getTyreCompoundImage";

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {
  @Input() result!: ISessionResult

  isExpanded = false
  getNumberTextSuffix = getNumberTextSuffix
  driverImage: any = null
  tireImagePath: null | string = null

  constructor(private driverImageService: DriverImageService) {
  }

  ngOnInit(): void {
    this.tireImagePath = getTyreCompoundImage(this.result.compound)

    this.driverImageService.getDriverImage(this.result.driverId).subscribe((data) => {
      this.driverImage = data
    })
  }

}
