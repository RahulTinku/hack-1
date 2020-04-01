import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AmazingTimePickerModule } from 'amazing-time-picker'; 

import { APP_ROUTING } from './app.routing';

import { TSGHelpComponent } from './component/help/tsgHelp.component';
import { HeaderComponent } from './component/header/header.component';

import { AppService } from './app.service';
import { PowersourceVerify } from './services/psVerify.service';
import { WeatherService } from './services/weather.service';
import { ReportService } from './services/getReports.service';
import { PagerService } from './common/pagination.service';
import { UpdateService } from './services/update.service';
import { CaseService } from './services/case.service';

import { Global } from './common/global.service';
import { ErrorHandler } from './common/errorHandler.service';
import { SearchPipe } from './common/search.pipe';
import { SearchItemsLengthPipe } from './common/searchItemsLength.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UninstallComponent } from './uninstall/uninstall.component';
import { ConfigComponent } from './config/config.component';
import { LogComponent } from './log/log.component';
import { AboutComponent } from './about/about.component';
import { HomeService } from './home/home.service';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ExcelService } from './excel.service';
import { DataService } from './dataService';
import { ChatService } from './chat.service';
import { WebsocketService } from './websocket.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        APP_ROUTING,
        AmazingTimePickerModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTooltipModule
    ],
    declarations: [
        AppComponent,
        TSGHelpComponent,
        SearchPipe,
        SearchItemsLengthPipe,
        HeaderComponent,
        HomeComponent,
        UninstallComponent,
        ConfigComponent,
        LogComponent,
        AboutComponent,
        FileUploadComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        AppService,
        PowersourceVerify,
        WeatherService,
        ReportService,
        PagerService,
        UpdateService,
        Global,
        ErrorHandler,
        CaseService,
        HomeService,
        ExcelService,
        DataService,
        ChatService,
        WebsocketService
    ]
})
export class AppModule {}