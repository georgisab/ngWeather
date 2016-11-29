import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WeatherService } from './weather/weather.service';
import { WeatherComponent } from './weather/weather.component'
import { ForecastComponent } from './forecast/forecast.component';
import { AppComponent } from './app.component';
//import { ForecastService } from './forecast/forecast.service';
import { MaterialModule } from '@angular/material';
import { WeatherSearchComponent } from './weather/weather-search.component';
import { RouterModule } from '@angular/router';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ForecastComponent,
    WeatherSearchComponent
  ],
  imports: [
   
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: 'weather', component: WeatherComponent },
      { path: 'forecast', component: ForecastComponent },
      { path: '', redirectTo: 'weather', pathMatch: 'full' },
      { path: '**', redirectTo: 'weather', pathMatch: 'full' }

    ], { useHash: true })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
