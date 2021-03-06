import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IForecastObject } from '../models/forecast';
import { Positions } from '../models/Positions';

@Injectable()
export class ForecastService {
    //private _forecastUrl = '../../api/forecast.json'
    private _forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=Sofia&units=metric&appid=0a05d5c30967b3cca4db61408d3eb63c'
    constructor(private _http: Http) { }

    getForecast(position: Positions): Observable<IForecastObject> {
        let query: string;

        if (position) {
            query = 'lat=' + position.latitude + '&lon=' + position.longitude
        }
        else {
            query = 'q=Varna';
        }
        return this._http
            .get('http://api.openweathermap.org/data/2.5/forecast?' + query + '&units=metric&appid=0a05d5c30967b3cca4db61408d3eb63c')
            .map((response: Response) => <IForecastObject>response.json())
            //.do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error')
    }

    searchForecastData(cityName: string): Observable<IForecastObject> {
        return this._http
            .get('http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=metric&appid=0a05d5c30967b3cca4db61408d3eb63c')
            .map((response: Response) => <IForecastObject>response.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json())
            });
    }

}
