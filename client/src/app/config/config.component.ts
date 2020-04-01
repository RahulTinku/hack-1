import { Component, OnInit } from '@angular/core';
import { _ } from 'underscore';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

	userForm : FormGroup;
	fileForm : FormGroup;

  constructor(private fb : FormBuilder) { }

ngOnInit() {
  	this.clearForm();
  }

  clearForm(){
    this.userForm = this.fb.group({

    	url: [''],
    	username: [''],
    	password: [''],

      webBasedReports : [true],
      teacherAttendance : [''],
      studentAlerts : [''],
      logAttendance : [''],
      

    });

    this.fileForm = this.fb.group({
    	filePath : ['']
    })
  }
}
