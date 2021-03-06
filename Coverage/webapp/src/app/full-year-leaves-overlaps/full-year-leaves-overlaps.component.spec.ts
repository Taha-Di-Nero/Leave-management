import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule, CalendarEvent } from 'angular-calendar';

import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LeavesTabSetModule } from '../leaves-tab-set/leave-tab-set.module';
import { FullYearLeavesOverlapsComponent } from './full-year-leaves-overlaps.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { UsedMaterialModule } from '../shared/used-material.module';
import { CoverageService } from '../service/coverage.service';


let coverageService: CoverageService;

describe('FullYearLeavesOverlapsComponent', () => {
  let component: FullYearLeavesOverlapsComponent;
  let fixture: ComponentFixture<FullYearLeavesOverlapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [CoverageService, {provide: APP_BASE_HREF, useValue: '/'}],
      imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        NgbModalModule.forRoot(),
        CalendarModule.forRoot(),
        UsedMaterialModule,
        DashboardModule,
        LeavesTabSetModule
      ],
      declarations: [ FullYearLeavesOverlapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullYearLeavesOverlapsComponent);
    component = fixture.componentInstance;
    coverageService = fixture.debugElement.injector.get(CoverageService);
    const spyOverlaps = spyOn(coverageService, 'searchGaps')
    .and.returnValue(Promise.resolve(new Array<CalendarEvent>()));
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
