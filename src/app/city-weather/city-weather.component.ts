import { Component, OnInit, Input } from '@angular/core';
// let jquery = require('jquery');

import { WeatherApiService } from '../shared/weather-api.service';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css'],
  providers: [WeatherApiService],
})
export class CityWeatherComponent implements OnInit {
  @Input() city: string;
  temperature: number;
  wind: number;
  showForecast = false;

  constructor(private _weatherApiService: WeatherApiService) {
  }

  ngOnInit() {
    // jquery('#collapseOne').collapse("hide");

    console.log(this.city);
    this._weatherApiService.getWeather(this.city).subscribe(
      (data) => {
        this.temperature = JSON.parse(data._body).main.temp;
        this.wind = JSON.parse(data._body).wind.speed;
      },
      (err) => {
        console.error('weather api returned an error');
      }
    );
  }

  toggleForecast() {
    this.showForecast = !this.showForecast;
  }

}
