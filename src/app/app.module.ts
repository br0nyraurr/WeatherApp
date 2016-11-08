import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { CityForecastComponent } from './city-weather/city-forecast/city-forecast.component';
import { KToFTempPipe } from './shared/k-to-f-temp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CityWeatherComponent,
    CityForecastComponent,
    KToFTempPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
