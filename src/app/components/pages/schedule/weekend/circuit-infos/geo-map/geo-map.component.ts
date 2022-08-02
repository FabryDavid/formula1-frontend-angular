import {AfterViewInit, Component, Input} from '@angular/core';
import * as L from 'leaflet';
import {LoadFileService} from "../../../../../../services/load-file-service/load-file.service";

@Component({
  selector: 'app-geo-map',
  templateUrl: './geo-map.component.html',
  styleUrls: ['./geo-map.component.scss']
})
export class GeoMapComponent implements AfterViewInit {
  @Input() geojsonFileName!: string

  private map!: L.Map;

  constructor(private loadFileService: LoadFileService) {
  }

  ngAfterViewInit(): void {
    this.map = L.map('map', {
      center: L.latLng(43.13, 5.9),
      zoom: 14
    });

    const openStreetLayer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 3,
      maxZoom: 18,
      attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> '
    });
    openStreetLayer.addTo(this.map);
    this.addGeoJsonFeatures();
  }

  addGeoJsonFeatures() {
    this.loadFileService.getFile(`assets/gjson_data/${this.geojsonFileName}`).subscribe((data: any) => {
      L.geoJSON(data).addTo(this.map);

      if (data) {
        const lat: number = data.features[0].geometry.coordinates[0][0];
        const long: number = data.features[0].geometry.coordinates[0][1];

        this.map.panTo(new L.LatLng(long, lat));
      }
    })
  }
}
