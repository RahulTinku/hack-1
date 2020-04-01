import { async, TestBed } from '@angular/core/testing';

import { TSGHelpComponent } from './tsgHelp.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TSGHelpComponent', () => {

    beforeEach(async() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            imports: [ FormsModule ],
            declarations: [
                TSGHelpComponent
            ]
        });
    });

    // Extremely basic example test. Just checks that the created Component is the type we expect.
    it('creates the component', async(() => {
        let fixture = TestBed.createComponent(TSGHelpComponent);

        expect(fixture.componentInstance instanceof TSGHelpComponent).toBe(true);
    }));
});

