import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class WeatherService {

 	appId : any = '78cd473d16d4bbce10b44292e91f61a8';
 	baseUrl : any = 'https://api.openweathermap.org/data/2.5';
  arr : Array<any> = [];
  localUrl : any;

  constructor(private _http : Http) { }
/* method configuring the url using city name to call the weather API for fetching current weather details */
  getWeather(cityName : string) : Observable<any> {
  	return this._http.get(this.baseUrl + '/weather?q=' + cityName + '&' + 'appid=' + this.appId + '&units=imperial')
  		.map((response : Response) => <any>response.json())
  }
/* method configuring the url using city name to call the weather API for fetching forecasted weather details */
  forcastWeather(cityName : string) : Observable<any>{
  	return this._http.get(this.baseUrl + '/forecast?q=' + cityName + '&' + 'appid=' + this.appId + '&units=imperial')
  		.map((response : Response) => <any>response.json())
  }
}
