import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ErrorHandler {
	error : any;
	constructor() {}
	getError(error : Response | any ) {
		if(error.status === 401) {
			return Observable.throw('Incorrect Username or Password');
		} else if(error.status === 0) {
			return Observable.throw('Server Error');
		} else if(error.status === 403){
			return Observable.throw('Authorization failed');			
		} else {
			return Observable.throw(error || "Server Error");
		}
	}
}