import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { ErrorHandler } from '../common/errorHandler.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CaseService {
	//get the base url from environment file
	baseUrl = environment.baseUrl;
	case : any;

  constructor(private _http: Http,
  	private _error : ErrorHandler) { }

  getAccounts() : Observable<any>{
	var headers = new Headers({
		'Content-Type': 'application/json'
	});
	const options = new RequestOptions({headers: headers});
	return this._http.get(this.baseUrl + '/casesByAccount', options)
		.map((res:any) => res.json())
		.catch(error => this._error.getError(error));
  }

  createCase(details) : Observable<any>{
	var headers = new Headers({
		'Content-Type': 'application/json'
	});
	const options = new RequestOptions({headers: headers});
	 this.case = {
		AccountId : '0013C00000AwVPp',
		Subject :details.subject,
		Description :details.desc,
		SuppliedName : 'Rahul Kumar',
		SuppliedEmail : 'rahul@powerschool.com'
	};
	return this._http.post(this.baseUrl + '/createCase', this.case, options)
		.map((res:any) => res.json())
		.catch(error => this._error.getError(error));
  }

}
