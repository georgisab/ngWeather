import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from "rxjs/Subject";


@Component({

    selector: 'weather-search',
    template: `
        <section class="weather-search">   
            <md-input [(ngModel)]='cityName' placeholder="City Name" (keydown.enter)="getWeather()"></md-input>
                <button md-raised-button  (click)= 'getWeather()' > Search</button>            
        </section>
    `
})
export class WeatherSearchComponent implements OnInit {
    @Output() cityEnter: EventEmitter<string> = new EventEmitter<string>();
    private searchStream = new Subject<string>();
    cityName: string = '';
   

    constructor() { }
   
    ngOnInit() { }


    getWeather(): void {
        this.cityEnter.emit(this.cityName);
      
    }
}

