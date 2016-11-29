import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { IWeatherObject } from './weather';
import { IForecastObject } from './forecast';
import { ForecastService } from './forecast.service';
import { GeolocationService } from './geolocation.service';
import '@angular/material';

@Component({


  templateUrl: './weather.component.html',
  providers: [WeatherService, ForecastService, GeolocationService],


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

        this._weatherService.getWeather().subscribe(
          weather => this.weather = weather,
          error => this.errorMessage = <any>error
        );
        
        this._forecastService.getForecast().subscribe(
          forecast => this.forecast = forecast,
          error => this.errorMessage = <any>error
        )
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
}
