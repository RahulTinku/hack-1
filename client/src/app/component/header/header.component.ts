import { Component, OnInit } from '@angular/core';
import { Global } from '../../common/global.service';
import { Router } from '@angular/router'

@Component({
	selector: "header",
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.css' ]
})

export class HeaderComponent {
	constructor(private global : Global, private route : Router) {}
	
	// signOut() {
	// 	this.global.removeToken();
	// 	localStorage.removeItem('token');
	// 	this.route.navigateByUrl('');
	// }
}