
    export interface ICoord {
        lon: number;
        lat: number;
    }

    export interface IWeather {
        id: number;
        main: string;
        description: string;
        icon: string;
    }

    export interface IMain {
        temp: number;
        pressure: number;
        humidity: number;
        temp_min: number;
        temp_max: number;
    }

    export interface IWind {
        speed: number;
        deg: number;
    }

    export interface IClouds {
        all: number;
    }

    export interface IRain {
        h3: number;
    }

    export interface ISys {
        type: number;
        id: number;
        message: number;
        country: string;
        sunrise: number;
        sunset: number;
    }

    export interface IWeatherObject {
        coord: ICoord;
        weather: IWeather[];
        base: string;
        main: IMain;
        wind: IWind;
        clouds: IClouds;
        rain: IRain;
        dt: number;
        sys: ISys;
        id: number;
        name: string;
        cod: number;
    }


