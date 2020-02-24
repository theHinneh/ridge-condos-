/** @format */

import { Component, OnInit, ViewChild } from '@angular/core';
// import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  // @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  // @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;

  // zoom = 15;
  // center: google.maps.LatLngLiteral;
  // options: google.maps.MapOptions = {
  //   mapTypeId: 'roadmap',
  //   minZoom: 15,
  //   center: { lat: 6.670243, lng: -1.625192 },
  //   zoom: 15,
  //   zoomControl: false,
  //   // scrollwheel: false,
  //   disableDoubleClickZoom: true
  // };
  // marker = {
  //   position: { lat: 6.670243, lng: -1.625192 },
  //   label: { color: 'red', text: 'Ridge Condos' },
  //   title: 'Ridge Condos Hotel',
  //   options: { animation: google.maps.Animation.BOUNCE }
  // };
  constructor() {}

  ngOnInit() {
    // navigator.geolocation.getCurrentPosition(position => {
    //   this.center = {
    //     lat: 6.670243,
    //     lng: -1.625192
    //   };
    // });
  }
}
