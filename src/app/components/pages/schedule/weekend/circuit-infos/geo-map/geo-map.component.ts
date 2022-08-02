import {AfterViewInit, Component} from '@angular/core';
import * as L from 'leaflet';
import * as geojson from 'geojson';
import {LoadFileService} from "../../../../../../services/load-file-service/load-file.service";

@Component({
  selector: 'app-geo-map',
  templateUrl: './geo-map.component.html',
  styleUrls: ['./geo-map.component.scss']
})
export class GeoMapComponent implements AfterViewInit {
  // @Input() geojsonFileName!: string

  private map!: L.Map;

  constructor(private loadFileService: LoadFileService) {
  }

  ngAfterViewInit(): void {
    this.map = L.map('map', {
      center: L.latLng(43.13, 5.9),
      zoom: 11
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
    this.loadFileService.getFile("assets/gjson_data/bh-2002.geojson").subscribe((data: geojson.GeoJsonObject | undefined) => {
      console.log("File loaded")
      console.log(data)
      L.geoJSON(data).addTo(this.map);
    })
  }
}
