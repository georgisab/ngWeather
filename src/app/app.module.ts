import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WeatherComponent } from './weather/weather.component'
import { MapComponent } from './map/map.component';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { WeatherSearchComponent } from './weather/weather-search.component';
import { GeolocationService } from './services/geolocation.service';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    MapComponent,
    WeatherSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_eIcha6EHGx5U2XBqoQa2tW4w4oi6QLI'
    }),
    RouterModule.forRoot([
      { path: 'weather', component: WeatherComponent },
      { path: 'map', component: MapComponent },
      { path: '', redirectTo: 'weather', pathMatch: 'full' },
      { path: '**', redirectTo: 'weather', pathMatch: 'full' }

    ], { useHash: true })
  ],
  providers: [GeolocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
