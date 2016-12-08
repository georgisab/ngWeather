import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { GeolocationService } from '../services/geolocation.service';
import { Positions } from '../models/Positions';
@Component({
    selector: 'map',
    templateUrl: '../map/map.component.html',
    styleUrls: ['../map/map.component.css']

})
export class MapComponent implements OnInit {

    pageTitle: string = 'Map';
    position: Position;
    lat: number = 51.678418;
    lng: number = 7.809007;
    @Output() notify: EventEmitter<Markers> = new EventEmitter<Markers>();
    marker = new Markers(this.lat, this.lng);

    constructor(private _geolocation: GeolocationService) { }

    ngOnInit() {
        this._geolocation.getCurrentPosition()
            .subscribe(
            (position) => {
                this.position = position;
                this.lng = position.coords.longitude;
                this.lat = position.coords.latitude;
                this.marker.lng = position.coords.longitude;
                this.marker.lat = position.coords.latitude;
            },
            error => console.log(error)
            )
    }
    mapClicked($event: MouseEvent) {
        this.marker.lat = $event.coords.lat;
        this.marker.lng = $event.coords.lng;
        let pos : Positions = {coords :Coordinates = { latitude: this.marker.lat, longitude:this.marker.lng,altitude :1, accuracy: 1, altitudeAccuracy:  null,  heading:  null, speed:  null  }, timestamp: null };
     
        this.notify.emit(pos);

    }

}
export class Markers {
    constructor(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}