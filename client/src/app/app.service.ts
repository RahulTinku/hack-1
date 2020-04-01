import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { ErrorHandler } from './common/errorHandler.service';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Rx';
import { Global } from './common/global.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
	//get base url from environment file
	baseUrl = environment.baseUrl;
	//constructor for service
	constructor(
		private http : Http, 
		private errorHandler : ErrorHandler, 
		public global : Global) { }

	//call service to authenticate the user.
	public authenticate(userInfo : any) :Observable<any> {
		var headers = new Headers();
		headers.append('Content-type', 'application/json');
		const options = new RequestOptions({headers: headers});
		return this.http.post(this.baseUrl +'/authenticate', JSON.stringify(userInfo), options)
			.map(res => res.json())
			.catch(error => this.errorHandler.getError(error));
	}
	//verify the existing user validity
	public verifyUser() : Observable<any> {
		var headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('token'))
		});
		const options = new RequestOptions({headers: headers});
		return this.http.get( this.baseUrl +'/vaidate', options)
				.map(res => res.json())
				.catch(error => this.errorHandler.getError(error));
	}

	public salesforeceAuth() :Observable<any> {
		let headers = new Headers({
			'Content-Type': 'application/json',
		});
		let options = new RequestOptions({headers : headers})
		return this.http.get(this.baseUrl + '/token', options)
				.map(res => res.json())
				.catch(error => this.errorHandler.getError(error));
	}
}