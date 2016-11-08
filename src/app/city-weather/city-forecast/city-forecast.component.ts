import { Component, OnInit, Input } from '@angular/core';

import { WeatherApiService } from '../../shared/weather-api.service';


@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.css'],
  providers: [WeatherApiService]
})
export class CityForecastComponent implements OnInit {
  @Input() city: string;
  forecast: {};

  constructor(private _weatherApiService: WeatherApiService) { }

  ngOnInit() {
    console.log(this.city);
    this._weatherApiService.getForecast(this.city).subscribe(
      (data) => {
        console.log(JSON.parse(data._body));
        this.forecast = JSON.parse(data._body).list;
      },
      (err) => {
        console.error('weather api returned an error');
      }
    );
  }
}
