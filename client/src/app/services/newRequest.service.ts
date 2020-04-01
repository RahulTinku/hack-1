import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewRequestService {
	constructor(private http : Http){
		console.log('new request service inintiaized');
	}

	getUpdates() {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		const options = new RequestOptions({headers: headers});
		return this.http.get('http://localhost:8080/api/updates', options)
		.map(res => res.json());
	}

	addRequest(newRequestData: any) {
		console.log('newRequestData', newRequestData);
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		const options = new RequestOptions({headers: headers});
		return this.http.post('http://localhost:8080/api/users/add', JSON.stringify(newRequestData), options)
			.map(res => res.json);
	}
}