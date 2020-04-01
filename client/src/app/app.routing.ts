import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { TSGHelpComponent } from './component/help/tsgHelp.component';
import { UninstallComponent } from './uninstall/uninstall.component';
import { ConfigComponent } from './config/config.component';
import { LogComponent } from './log/log.component';
import { AboutComponent } from './about/about.component';


export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: HomeComponent
    },
    //{ path: '**', redirectTo: '/', pathMatch: "full" },
    { path: 'install', component: HomeComponent },
    { path: 'uninstall', component: UninstallComponent },
    { path: 'config', component: ConfigComponent },
    { path: 'log/:flag', component: LogComponent },
    { path: 'about', component: AboutComponent },
    { path: 'tsgHelp', component: TSGHelpComponent },
    { path: 'admin/02/tsgHelp', redirectTo: 'tsgHelp' },
    ]);