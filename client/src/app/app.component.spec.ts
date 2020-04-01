import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { PowersourceVerify } from './services/psVerify.service';
import { Global } from './common/global.service';

describe('AppComponent', () => {

    beforeEach(async() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            imports: [ FormsModule, HttpModule, RouterTestingModule ],
            declarations: [
                AppComponent
            ],
            providers:[ PowersourceVerify ]
        });
    });

    // Extremely basic example test. Just checks that the created Component is the type we expect.
    it('creates the component', async(() => {
        let fixture = TestBed.createComponent(AppComponent);

        expect(fixture.componentInstance instanceof AppComponent).toBe(true);
    }));

   it('should call getPowerSource function', () => {
       let psVerify = TestBed.get(PowersourceVerify);
       let global = TestBed.get(Global);
       const comp = new AppComponent(psVerify,global);
       comp.emailId = 'rahulkumar271@gmail.com';
       comp.password = '12345';
       comp.authenticateUser();
       expect(comp.isAuthenicated).toBe(true);
   });

});