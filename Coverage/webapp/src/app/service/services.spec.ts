import { Employe } from '../shared/dto/employe';
import { HolidayShutdown } from '../shared/dto/holiday-shutdown';
import { ViewMode, LeaveState, EmployeState } from '../shared/enums';
import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { ReflectiveInjector } from '@angular/core';
import { MockBackend } from '@angular/http/testing';

import { XHRBackend, HttpModule, Response, ResponseOptions, RequestOptions, BaseRequestOptions, Http } from '@angular/http';

import { CoverageService } from './coverage.service';
import { gapsByAreaMock, gapsByEmployeMock, flexibilityCompositionMock, leaves2018mocks, inflexibilityPeriodListMock, holidayShutdownsmocks } from '../shared/tests-mocks/mocks';
import { CalendarEvent } from 'angular-calendar';
import { EmployesFlexibility } from '../shared/dto/employes-flexibility';
import { LeaveService } from './leave.service';
import { FullDayLeave } from '../shared/dto/leave';
import { EmployeLeaves } from '../shared/dto/employe-leaves';
import { InflexibilityPeriodsService } from './inflexibility-periods.service';
import { InflexibilityPeriod } from '../shared/dto/inflexibility-period';
import { HolidayShutdownsService } from './holiday-shutdowns.service';
import { SecurityService } from './security.service';

describe('MockBackend: CoverageService', () => {
  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      { provide: XHRBackend, useClass: MockBackend },
      { provide: RequestOptions, useClass: BaseRequestOptions },
      Http,
      CoverageService,
    ]);
    this.coverageService = this.injector.get(CoverageService);
    this.backend = this.injector.get(XHRBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });



  it('searchGaps() should query current service', () => {
    this.coverageService.searchGaps('01-01-2017', '31-12-2017', ViewMode.Area);
    expect(this.lastConnection).toBeDefined('no http service connection at all?');
    expect(this.lastConnection.request.url).toMatch('coverage/overlaps/area/01-01-2017/31-12-2017', 'url invalid');
  });

  it('searchGaps() by area should return some gaps', fakeAsync(() => {
    let result: CalendarEvent[];
    this.coverageService.searchGaps('01-01-2017', '31-12-2017', ViewMode.Area).then(
      gaps => {
        result = gaps;
      });
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(gapsByAreaMock),
    })));
    tick();
    expect(result.length).toBe(962, 'searchGaps() by area result length doesn\'t match');
  }));

  it('searchGaps() by employe should return some gaps', fakeAsync(() => {
    let result: CalendarEvent[];
    this.coverageService.searchGaps('01-04-2017', '30-04-2017', ViewMode.Employe).then(
      gaps => {
        result = gaps;
      });
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(gapsByEmployeMock),
    })));
    tick();
    expect(result.length).toBe(12, 'searchGaps() by employe result length doesn\'t match');
  }));

  it('searchFlexibility() should return flexibility composition', fakeAsync(() => {
    let result: EmployesFlexibility;
    this.coverageService.searchFlexibility().then(
      flex => {
        result = flex;
      });
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(flexibilityCompositionMock),
    })));
    tick();
    expect(result.getAll().length).toBe(73, 'searchGaps() result length doesn\'t match');
  }));

});

describe('MockBackend: LeaveService', () => {
  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      { provide: XHRBackend, useClass: MockBackend },
      { provide: RequestOptions, useClass: BaseRequestOptions },
      Http,
      LeaveService,
    ]);
    this.leaveService = this.injector.get(LeaveService);
    this.backend = this.injector.get(XHRBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });



  it('updateLeavesPlan() should query current service', () => {
    this.leaveService.updateLeavesPlan([], [], undefined);
    expect(this.lastConnection).toBeDefined('no http service connection at all?');
    expect(this.lastConnection.request.url).toMatch('leave/employe/plan', 'url invalid');
  });

  it('getLeaves() should return some leaves', fakeAsync(() => {
    let result: FullDayLeave[];
    this.leaveService.getLeaves('01-01-2018', '31-12-2018').then(
      leaves => {
        result = leaves;
      });
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(leaves2018mocks),
    })));
    tick();
    expect(result.length).toBe(10, 'getLeaves() result length doesn\'t match');
  }));

  it('getYearLeaves() should return some leaves', fakeAsync(() => {
    let result: FullDayLeave[];
    this.leaveService.getYearLeaves(2018).then(
      leaves => {
        result = leaves;
      });
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(leaves2018mocks),
    })));
    tick();
    expect(result.length).toBe(10, 'getYearLeaves() result length doesn\'t match');
  }));

  it('getLeavesByState() should return some leaves', fakeAsync(() => {
    let result: EmployeLeaves[];
    this.leaveService.getLeavesByState(LeaveState.Approved).then(
      leaves => {
        result = leaves;
      });
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(leaves2018mocks),
    })));
    tick();
    expect(result.length).toBe(1, 'getLeavesByState() result length doesn\'t match');
    expect(result[0].leaves.length).toBe(10, 'getLeavesByState() result length doesn\'t match');
  }));

});

describe('MockBackend: HolidayShutdownsService', () => {
  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      { provide: XHRBackend, useClass: MockBackend },
      { provide: RequestOptions, useClass: BaseRequestOptions },
      Http,
      HolidayShutdownsService,
    ]);
    this.holidayShutdownsService = this.injector.get(HolidayShutdownsService);
    this.backend = this.injector.get(XHRBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });

  it('saveHolidayShutdown() should query current service', () => {
    const shutdown = new HolidayShutdown();
    shutdown.from = shutdown.to = <any>{ 'year': 2017, 'month': 12, 'day': 1 };

    this.holidayShutdownsService.saveHolidayShutdown(shutdown);
    expect(this.lastConnection).toBeDefined('no http service connection at all?');
    expect(this.lastConnection.request.url).toMatch('holidayShutdowns/', 'url invalid');
  });

  it('getHolidayShutdowns() should return some shutdowns', fakeAsync(() => {
    let result: InflexibilityPeriod[];
    this.holidayShutdownsService.getHolidayShutdowns().then(
      gaps => {
        result = gaps;
      });
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(holidayShutdownsmocks),
    })));
    tick();
    expect(result.length).toBe(3, 'getHolidayShutdowns() result length doesn\'t match');
  }));
});

describe('MockBackend: InflexibilityPeriodsService', () => {
  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      { provide: XHRBackend, useClass: MockBackend },
      { provide: RequestOptions, useClass: BaseRequestOptions },
      Http,
      InflexibilityPeriodsService,
    ]);
    this.inflexibilityPeriodsService = this.injector.get(InflexibilityPeriodsService);
    this.backend = this.injector.get(XHRBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });

  it('saveInflexibilityPeriod() should query current service', () => {
    const inflexibilityPeriod = new InflexibilityPeriod();
    inflexibilityPeriod.id = 1;
    inflexibilityPeriod.from = inflexibilityPeriod.to = <any>{ 'year': 2017, 'month': 12, 'day': 1 };

    this.inflexibilityPeriodsService.saveInflexibilityPeriod(inflexibilityPeriod);
    expect(this.lastConnection).toBeDefined('no http service connection at all?');
    expect(this.lastConnection.request.url).toMatch('inflexibilityPeriods/', 'url invalid');
  });

  it('getInflexibilityPeriods() should return some periods', fakeAsync(() => {
    let result: InflexibilityPeriod[];
    this.inflexibilityPeriodsService.getInflexibilityPeriods().then(
      inflex => {
        result = inflex;
      });
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(inflexibilityPeriodListMock),
    })));
    tick();
    expect(result.length).toBe(2, 'getInflexibilityPeriods() result length doesn\'t match');
  }));
});

describe('MockBackend: SecurityService', () => {
  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      { provide: XHRBackend, useClass: MockBackend },
      { provide: RequestOptions, useClass: BaseRequestOptions },
      Http,
      SecurityService,
    ]);
    this.securityService = this.injector.get(SecurityService);
    this.backend = this.injector.get(XHRBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });

  it('logout() should query current service', () => {
    this.securityService.logout();
    expect(this.lastConnection).toBeDefined('no http service connection at all?');
    expect(this.lastConnection.request.url).toMatch('security/logout/', 'url invalid');
  });

  it('getLoggedEmploye() should return some periods', fakeAsync(() => {
    let result: Employe;
    this.securityService.getLoggedEmploye().then(
      emp => {
        result = emp;
      });
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify({ id: 1, name: 'FName1', surname: 'fSurname1', state: EmployeState.Flexible, currentYearLeaves: 1 }),
    })));
    tick();
    expect(result.id).toBe(1, 'id doesn\'t match');
    expect(result.name).toBe('FName1', 'id doesn\'t match');
    expect(result.surname).toBe('fSurname1', 'id doesn\'t match');
    expect(result.state).toBe(EmployeState.Flexible, 'id doesn\'t match');
    expect(result.currentYearLeaves).toBe(1, 'id doesn\'t match');
  }));
});
