import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IWeatherObject } from '../models/weather';

@Injectable()
export class WeatherService {
    // private _weatherUrl = './api/weather.json';
    private _weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=ret&units=metric&appid=0a05d5c30967b3cca4db61408d3eb63c';
    private _apiKey: string = '0a05d5c30967b3cca4db61408d3eb63c';
    constructor(private _http: Http) { }

    getWeather(position: Position): Observable<IWeatherObject> {
        let query: string;

        if (position) {
            query = 'lat=' + position.coords.latitude + '&lon=' + position.coords.longitude
        }
        else {
            query = 'q=Varna';
        }
        return this._http
            .get('http://api.openweathermap.org/data/2.5/weather?' + query + '&units=metric&appid=0a05d5c30967b3cca4db61408d3eb63c')
            .map((response: Response) => <IWeatherObject>response.json())
            //  .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);

    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error')
    }

    searchWeatherData(cityName: string): Observable<IWeatherObject> {
        return this._http
            .get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=0a05d5c30967b3cca4db61408d3eb63c')
            .map((response: Response) => <IWeatherObject>response.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json())
            });
    }

}