import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { ErrorHandler } from '../common/errorHandler.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ReportService{
	//get the base url from environment file
	baseUrl = environment.baseUrl;
	//constructor for this controller
	constructor(private http : Http, private errorHandler : ErrorHandler) {
		var obj;
		//this.getJSON.subscribe(data => obj.data, error => console.log(error));
	}

	public ReportsList() : Observable<any>{
		var headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('token'))
		});
		const options = new RequestOptions({headers: headers});
		return this.http.get(this.baseUrl +'/s3bucketObject', options)
						.map((res:any) => res.json())
						.catch(error => this.errorHandler.getError(error));
	}

	public DownloadReport(key) : Observable<any>{
		var headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('token'))
		});
		return this.http.get(this.baseUrl +'/s3download', { headers: headers, params : {
												key: key
											}}, )
						.map((res:any) => res)
						.catch(error => this.errorHandler.getError(error));
	}
}
