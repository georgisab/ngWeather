import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { IWeatherObject } from '../models/weather';
import { IForecastObject } from '../models/forecast';
import { ForecastService } from './forecast.service';
import { GeolocationService } from '../services/geolocation.service';
import { MapComponent,Markers } from '../map/map.component';


import '@angular/material';

@Component({
  templateUrl: './weather.component.html',
  providers: [ForecastService, WeatherService],
 
})
export class WeatherComponent {
  forecast: IForecastObject;
  weather: IWeatherObject;
  errorMessage: string;
  position: Position;
  hide: boolean = false;

  constructor(private _weatherService: WeatherService, private _forecastService: ForecastService, private _geolocation: GeolocationService) { }

  ngOnInit() {
    this._geolocation.getCurrentPosition().subscribe(
      (position) => {
        this.position = position;
        this.getWeatherByPosition(position)
      },
      error => this.errorMessage = <any>error
    )
  }

  onCityEnter(city: string) {
    console.log(this.position.coords.latitude)
    this._weatherService.searchWeatherData(city)
      .subscribe(
      weather => this.weather = weather,
      error => this.errorMessage = <any>error
      )

    this._forecastService.searchForecastData(city)
      .subscribe(
      forecast => this.forecast = forecast,
      error => this.errorMessage = <any>error
      )

  }
  clickedShowHide(): void {
    if (this.hide) {
      this.hide = false;
    } else {
      this.hide = true;
    }
  }

  onMarkerChange(pos: any):void {
    console.log(pos);
    // this. getWeatherByPosition(pos)
  }

  getWeatherByPosition(position: Position){
     this._weatherService.getWeather(position).subscribe(
          weather => this.weather = weather,
          error => this.errorMessage = <any>error
        );

        this._forecastService.getForecast(position).subscribe(
          forecast => this.forecast = forecast,
          error => this.errorMessage = <any>error
        )
  }

}
