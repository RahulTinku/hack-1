import { Component, OnInit, Inject, HostListener } from "@angular/core";
import { AppService } from './app.service';
import { Global } from './common/global.service';
import { Router } from '@angular/router';
import { DataService } from './dataService';
import { ChatService } from './chat.service';

@Component({
    selector: "tyn-app",
    templateUrl: './app.component.html',
    styleUrls: [ "./app.component.scss" ]
})
export class AppComponent implements OnInit {
    //set variables
   isAuthenicated : boolean = false;
   emailId : any = '';
   password : any = '';
   isloading : boolean = false;
   isError: boolean = false;
   errorMessage : string = '';
   timeoutID : number;
   breadcrum : any = 'install';
   timedFunction : any;
   sec : number = 60000;
   min : number = 20; //timed out is set to be 20 mins
   time : number;
   isLogging : any;
    //constructor
    public constructor(
      private appService : AppService,
      private global : Global,
      private router : Router,
      private data : DataService,
      private chatService : ChatService
     ) {
      chatService.messages.subscribe(msg => {
        console.log("response from websocket server ", msg);
      })
    }

    public message = {
      author : 'rahul',
      message : 'jello'
    }

    sendMsg(){
      console.log('new msg sent from client ');
      this.chatService.messages.next(this.message);
    }
    //oninit function
    public ngOnInit() { 
      this.verifyUser();
      this.data.currentMessage.subscribe(message => {
        if(message === 'true'){
          this.isLogging = true;
        }else{
          this.isLogging = false;
        }
        console.log(this.isLogging);
      })  
    }

    //Verify the logged in user
    verifyUser() {
      let name = (this.router.url).split('/')[1];
      if(name === ''){
        name = 'install';
      } else if(name === 'tsgHelp'){
        name = 'help';
      } else if(name === 'tsgreports'){
        name = 'reports';
      } else if(name === 'admin/02/tsgHelp') {
        name = 'help';
      } else {
        name = name;

      }
      this.breadcrum = name.charAt(0).toUpperCase() + name.slice(1);
    }    
}
