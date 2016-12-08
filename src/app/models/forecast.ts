

    export interface Coord {
        lon: number;
        lat: number;
    }

    export interface Main {
        temp: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
    }

    export interface Weather {
        id: number;
        main: string;
        description: string;
        icon: string;
    }

    export interface Clouds {
        all: number;
    }

    export interface Wind {
        speed: number;
        deg: number;
    }

    export interface Sys {
        pod: string;
    }

    export interface List {
        dt: number;
        main: Main;
        weather: Weather[];
        clouds: Clouds;
        wind: Wind;
        sys: Sys;
        dt_txt: string;
    }

    export interface City {
        id: number;
        name: string;
        coord: Coord;
        country: string;
        cod: string;
        message: number;
        cnt: number;
        list: List[];
    }

    export interface IForecastObject {
        city: City;
    }


