export class Positions implements Position{
    constructor(coords){  
            this.coords = coords
     }
    coords : Coordinates;
    timestamp: any   
}

export class Coordinates implements Coordinates {
    constructor (latitude: number, longitude: number, accuracy: number, altitude: number | null,  altitudeAccuracy: number | null,  heading: number | null, speed: number | null ){
            this.latitude = latitude ,
            this.longitude = longitude,
            this.altitude = altitude,
            this.altitudeAccuracy = altitudeAccuracy,
            this.heading = heading,
            this.speed = speed
    }
    accuracy: number ;
    altitude: number | null;
    altitudeAccuracy: number | null;
    heading: number | null;
    latitude: number;
    longitude: number;
    speed: number | null;
}