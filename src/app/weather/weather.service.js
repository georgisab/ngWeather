"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var WeatherService = (function () {
    function WeatherService(_http) {
        this._http = _http;
        this._weatherUrl = 'api/weather.json';
    }
    /*getWeather(): Observable<Response> {
        return this._http
           .get(this._weatherUrl)
            .map((response: Response) => response.json())
           .do(data => console.log('All: '+ JSON.stringify(data)))
           .catch(this.handleError);
    }
    private handleError(error:Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error')
}*/
    WeatherService.prototype.getData = function () {
        return [
            {
                "coord": {
                    "lon": 145.77,
                    "lat": -16.92
                },
                "weather": [{
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }],
                "base": "cmc stations",
                "main": {
                    "temp": 293.25,
                    "pressure": 1019,
                    "humidity": 83,
                    "temp_min": 289.82,
                    "temp_max": 295.37
                },
                "wind": {
                    "speed": 5.1,
                    "deg": 150
                },
                "clouds": {
                    "all": 75
                },
                "rain": {
                    "3h": 3
                },
                "dt": 1435658272,
                "sys": {
                    "type": 1,
                    "id": 8166,
                    "message": 0.0166,
                    "country": "AU",
                    "sunrise": 1435610796,
                    "sunset": 1435650870
                },
                "id": 2172797,
                "name": "Cairns",
                "cod": 200
            }
        ];
    };
    WeatherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map