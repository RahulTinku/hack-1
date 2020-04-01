import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
	isDisable : string;
	isLoading : boolean = false;

  constructor(private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  	this.isDisable = this.route.snapshot.paramMap.get('flag');
  	if(this.isDisable === 'true'){
  		this.isLoading = true;
  	}else{
  		this.isLoading = false;
  	}
  	console.log(this.isDisable);
  }
  enableLeftMenu(){
  	this.isLoading = false;
  }

}
