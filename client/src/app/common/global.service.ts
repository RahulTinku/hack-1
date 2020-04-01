import { Injectable } from '@angular/core';

@Injectable()
export class Global {
	token : any;
	constructor() {}
	setToken(token: any) {
		this.token = token;
	}
	getToken() {
		return this.token;
	}
	removeToken() {
		this.token = undefined;
	}
}