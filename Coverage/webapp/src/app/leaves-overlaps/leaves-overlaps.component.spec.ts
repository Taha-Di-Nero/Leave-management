import { gapsMock } from '../shared/tests-mocks/mocks';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule, CalendarEvent } from 'angular-calendar';

import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LeavesTabSetModule } from '../leaves-tab-set/leave-tab-set.module';
import { LeavesOverlapsComponent } from './leaves-overlaps.component';
import { FlexibilityPieModule } from '../dashboard/flexibility-pie/flexibility-pie.module';
import { YearsCoverageModule } from '../dashboard/years-coverage/years-coverage.module';
import { UsedMaterialModule } from '../shared/used-material.module';
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
                HttpModule,
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
            .and.returnValue(Promise.resolve(gapsMock));
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
