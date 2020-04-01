import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { ErrorHandler } from '../common/errorHandler.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UpdateService {
	//get base url.
	baseUrl = environment.baseUrl;
	//constructor for this service file.
	constructor(private http: Http, private errorHandler : ErrorHandler) {}

	//function for calling the api for saving data from udpate tabs.
	submitUpdate(body: any) : Observable<any>{
		// const token = localStorage.getItem('token');
		// console.log('token: ', token);
		var headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('token'))
		});
		const options = new RequestOptions({headers: headers});

		//return the post REST call.
		return this.http.post(this.baseUrl + '/requestUpadte', JSON.stringify(body), options)
						.map(response => response.json())
						.catch(error => this.errorHandler.getError(error));
	}
}