import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class WeatherApiService {
  private weatherApi = {
    baseUrl: 'http://api.openweathermap.org/data/2.5/',
    mode: 'mode=json',
    appid: 'appid=a46a3d2744b5c18ac5d86c1b9e667c11'
  };

  constructor(private _http: Http) {}

  private checkForError(response: Response): Response {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error['response'] = response;
      console.error(error);
      throw error;
    }
  }

  public getWeather(city: string): Observable<any> {
    var weatherUrl = this.weatherApi.baseUrl + 'weather?' + this.weatherApi.mode + '&' + this.weatherApi.appid + '&q=' + city;
    return this._http.get(weatherUrl)
      .map(this.checkForError)
      .catch(err => Observable.throw(err))
  }

  public getForecast(city: string): Observable<any> {
    var forecastUrl = this.weatherApi.baseUrl + 'forecast?' + this.weatherApi.mode + '&' + this.weatherApi.appid + '&q=' + city;
    return this._http.get(forecastUrl)
      .map(this.checkForError)
      .catch(err => Observable.throw(err))
  }

}

