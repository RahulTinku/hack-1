import { Component, OnInit } from '@angular/core';
import { _ } from 'underscore';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { saveAs } from 'file-saver/FileSaver';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-uninstall',
  templateUrl: './uninstall.component.html',
  styleUrls: ['./uninstall.component.css']
})
export class UninstallComponent implements OnInit {
userForm : FormGroup;
  fileForm : FormGroup;
  photoUrl : string;
  isCheckAll : boolean = false;
  isCheckAllInstall : boolean = false;
  isValueFilledError : boolean = false;
  isSuccess : boolean = false;
  isFail : boolean = false;
  formNames  = ['webBasedReports','teacherAttendance','studentAlerts','logAttendance',
  'lockerManagement','incedentAttendance','hideStandard','healthSys','ewsTeachers','ewsReports','ewsAdmin','ell'];

  constructor(private homeService : HomeService,
    private fb : FormBuilder) { }

  ngOnInit() {
    this.clearForm();
  }

  clearForm(){
    this.userForm = this.fb.group({

      url: [''],
      username: [''],
      password: [''],

      installerAllCheck : [''],
      enableAllCheck : [''],

      webBasedReports : [''],
      teacherAttendance : [''],
      studentAlerts : [''],
      logAttendance : [''],
      lockerManagement : [''],
      incedentAttendance : [''],
      hideStandard : [''],
      healthSys : [''],
      ell : [''],
      ewsAdmin : [''],
      ewsReports : [''],
      ewsTeachers : [''],

      ewsTeachersCheck : [''],
      ewsReportsCheck : [''],
      ewsAdminCheck : [''],
      ellCheck : [''],
      healthSysCheck: [''],
      hideStandardCheck : [''],
      incedentAttendanceCheck : [''],
      lockerManagementCheck : [''],
      logAttendanceCheck : [''],
      studentAlertsCheck : [''],
      teacherAttendanceCheck : [''],
      webBasedReportsCheck : ['']

    });

    this.fileForm = this.fb.group({
      filePath : ['']
    })
  }
  execute(){
    this.homeService.execute().
    subscribe((res)=>{
      console.log(res);
    })
  }
  onUpload(){
    let filePath = _.clone(this.fileForm.value);
    //let filename = filePath.replace(/^.*[\\\/]/, '')
  }
 //  onFileSelect(input) {
 //    console.log('file :', input);
  //   if (input.files && input.files[0]) {
  //     var reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       //console.log(e.target);
  //       this.photoUrl = e.target.result;
  //     }
  //     reader.readAsDataURL(input.files[0]);
  //   }
  // }  
  onSubmit(){
    let user = _.clone(this.userForm.value);
    this.isSuccess = false;
    this.isFail = false;
    this.isValueFilledError = false;

    if((user.url !== null && user.url !== undefined && user.url !== '') && (user.username !== null && user.username !== undefined && user.username !== '')
      &&(user.password !== null && user.password !== undefined && user.password !== '')){
      this.isValueFilledError = false;
      let installs = [
      {name: user.url, username: user.username, password: user.password},
      {name : 'Power Pack ELL', install : user.ell === true ? true : false, enable: user.ellCheck  === true ? true : false},
      {name : 'PowerPack EWS Admin', install : user.ewsAdmin === true ? true : false, enable: user.ewsAdminCheck  === true ? true : false},
      {name : 'PowerPack EWS Reports', install : user.ewsReports === true ? true : false, enable: user.ewsReportsCheck  === true ? true : false},
      {name : 'PowerPack EWS Teachers', install : user.ewsTeachers === true ? true : false, enable: user.ewsTeachersCheck  === true ? true : false},
      {name : 'PowerPack Health System' , install : user.healthSys === true ? true :false, enable: user.healthSysCheck  === true ? true : false},
      {name : 'PowerPack Hide Standard Percent', install : user.hideStandard === true ? true :false, enable: user.hideStandardCheck  === true ? true : false},
      {name : 'PowerPack Incident Attendance Sync' , install : user.incedentAttendance === true ? true :false, enable: user.incedentAttendanceCheck  === true ? true : false},
      {name : 'PowerPack Locker Management' , install : user.lockerManagement === true ? true :false, enable: user.lockerManagementCheck  === true ? true : false},
      {name : 'PowerPack Log Attendance Sync' , install : user.logAttendance === true ? true :false, enable: user.logAttendanceCheck  === true ? true : false},
      {name : 'PowerPack Student Alerts', install : user.studentAlerts === true ? true :false, enable: user.studentAlertsCheck  === true ? true : false},
      {name : 'PowerPack Teacher Attendance' , install : user.teacherAttendance === true ? true :false, enable: user.teacherAttendanceCheck  === true ? true : false},
      {name : 'Power_Pack-Web-based_Reports-6.0.9' , install : user.webBasedReports === true ? true :false, enable: user.webBasedReportsCheck  === true ? true : false}
    ]
    this.homeService.callBatch()
    .subscribe((res) => {
      if(res.success){
        this.isSuccess = true;
      }else{
        this.isFail = true;
      }
    }, (err)=> {
      if(err){
        this.isFail = true;
        this.isSuccess = false;
      }
      console.log(err);
    });
    this.downloadFile(installs);
    //console.log('installs : ', installs)
    }else {
      this.isValueFilledError = true;
    }
  }

    downloadFile(data: any) {
      const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
      const header = Object.keys(data[0]);
      let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
      csv.unshift(header.join(','));
      let csvArray = csv.join('\r\n');

      var blob = new Blob([csvArray], {type: 'text/csv' })
      saveAs(blob, "myFile.csv");
  }
  /** For install click*/
  installCheck(event){
    this.userForm.controls['installerAllCheck'].setValue(false);
    this.userForm.controls['enableAllCheck'].setValue(false);
    let value = event.target.attributes[2].value;
    let installValue = value + 'Check'; // form the enable checkbox formname
    if(event.target.attributes[5].ownerElement.checked === false){
      this.userForm.controls[installValue].setValue(false);
    }else{
      this.userForm.controls[installValue].setValue(true);
    }
  }
  /** For enable click*/
  enableCheck(event){
    this.userForm.controls['installerAllCheck'].setValue(false);
    let value = event.target.attributes[2].value;
    let end = value.indexOf('Check'); //find the index of Word Check
    let installValue = value.substr(0, end); // form the word without word Check
    if(event.target.attributes[5].ownerElement.checked === false){ //find the current status of checkBox
        this.userForm.controls[installValue].setValue(false); //set form value true or false
    }
  }

  checkAllEnable(){
    if(this.isCheckAll === false){
      this.isCheckAll = true;
      //this.userForm.controls['enableAllCheck'].setValue(true);
      this.formNames.forEach((item, index)=>{
        this.userForm.controls[item+'Check'].setValue(true);
      })
    }else{
      this.isCheckAll = false;
      //this.userForm.controls['enableAllCheck'].setValue(false);
      this.formNames.forEach((item, index)=>{
        this.userForm.controls[item+'Check'].setValue(false);
      })
    }
  }
  checkAllInstall(){
    if(this.isCheckAllInstall === false){
      this.isCheckAllInstall = true;
      this.userForm.controls['enableAllCheck'].setValue(true);
      this.formNames.forEach((item, index)=>{
        this.userForm.controls[item].setValue(true);
      })
    }else{
      this.formNames.forEach((item, index)=>{
        this.userForm.controls[item].setValue(false);
        this.userForm.controls[item+'Check'].setValue(false);
      })
      this.isCheckAllInstall = false;
      this.userForm.controls['enableAllCheck'].setValue(false);
    }
    this.checkAllEnable();
  }

}
