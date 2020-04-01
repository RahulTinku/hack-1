import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable()
export class PowersourceVerify {

 	powerSourceURL = 'https://support.powerschool.com/authenticate.action';
 	
	constructor(private _http : Http) {
	}

	psLogin(): Observable<any> {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		const options = new RequestOptions({headers : headers});
		return this._http.get(this.powerSourceURL, options)
		.map(res => {
			console.log(res)
		});
	}
}