export class Positions {
     constructor(lat: number, lng: number) {
        this.latitude = lat;
        this.longitude = lng;
     }
      accuracy: number | null;
      altitude: number | null;
      altitudeAccuracy: number | null;
      heading: number | null;
      latitude: number;
      longitude: number;
      speed: number | null;
}