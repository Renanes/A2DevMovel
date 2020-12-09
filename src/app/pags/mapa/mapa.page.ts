import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import {Map,tileLayer,marker} from 'leaflet';
import { NativeGeocoder, NativeGeocoderOptions} from "@ionic-native/native-geocoder/ngx";

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  public map:Map;
  public newMarker:any;
  public address:string[];

  constructor(private geocoder: NativeGeocoder) { }

  ionViewDidEnter(){
    this.loadMap();
  }

  loadMap() {
    this.map = new Map("map").setView([17.3850,78.4867], 13);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    { attribution: ''}).addTo(this.map);
  }

  locatePosition(){
    this.map.locate({setView:true}).on("locationfound", (e: any)=> {
      this.newMarker = marker([e.latitude,e.longitude], {draggable: 
      true}).addTo(this.map);
      this.newMarker.bindPopup("Você está localizado aqui!").openPopup();
      //this.getAddress(e.latitude, e.longitude);
     
      this.newMarker.on("dragend", ()=> {
        const position = this.newMarker.getLatLng();
       // this.getAddress(position.lat, position.lng);
       });
    });
  }

  /*getAddress(lat: number, long: number) {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.geocoder.reverseGeocode(lat, long, options).then(results => {
      this.address = Object.values(results[0]).reverse();
    });
  }*/

  ngOnInit() {
  }

}
