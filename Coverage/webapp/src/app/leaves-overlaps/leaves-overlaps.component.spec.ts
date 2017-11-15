import { gapsByAreaMock } from '../shared/tests-mocks/mocks';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/Common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule, CalendarEvent } from 'angular-calendar';

import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LeavesOverlapsComponent } from './leaves-overlaps.component';
import { CoverageService } from '../service/coverage.service';
import { ViewMode } from '../shared/enums';


let coverageService: CoverageService;

describe('LeavesOverlapsComponent', () => {
    let component: LeavesOverlapsComponent;
    let fixture: ComponentFixture<LeavesOverlapsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [CoverageService, { provide: APP_BASE_HREF, useValue: '/' }],
            imports: [
                CommonModule,
                FormsModule,
                HttpClientModule,
                BrowserAnimationsModule,
                NgbModule.forRoot(),
                NgbModalModule.forRoot(),
                CalendarModule.forRoot()
            ],
            declarations: [LeavesOverlapsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LeavesOverlapsComponent);
        component = fixture.componentInstance;
        coverageService = fixture.debugElement.injector.get(CoverageService);
        component.mode = ViewMode.Area;
        component.viewDate = new Date(2017, 7, 10);
        const spyOverlaps = spyOn(coverageService, 'searchGaps')
            .and.returnValue(Promise.resolve(gapsByAreaMock));
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('Trigger day click.', () => {
        fixture.detectChanges();
        expect(function () {
            component['dayClicked'].call(component, new MouseEvent('click'), { date: new Date(2017, 10, 10), inMonth: true });
        }).not.toThrow();
    });
});
