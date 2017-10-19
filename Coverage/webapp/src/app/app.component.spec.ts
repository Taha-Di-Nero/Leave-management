import { EmployeLeaves } from './shared/dto/employe-leaves';
import { async, ComponentFixture, TestBed, } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { CalendarModule, CalendarEvent } from 'angular-calendar';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule } from 'ng-block-ui';

import { AppComponent } from './app.component';
import { FullYearLeavesOverlapsModule } from './full-year-leaves-overlaps/full-year-leaves-overlaps.module';
import { AppRoutingModule } from './app-routing.module';
import { UsedMaterialModule } from './shared/used-material.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LeavesTabSetModule } from './leaves-tab-set/leave-tab-set.module';
import { FabComponent } from './fab/fab.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { FullYearLeavesOverlapsComponent } from './full-year-leaves-overlaps/full-year-leaves-overlaps.component';
import { FullYearLeavesComponent } from './full-year-leaves/full-year-leaves.component';
import { NotFoundModule } from './not-found/not-found.module';
import { AccessDeniedModule } from './access-denied/access-denied.module';
import { FabModule } from './fab/fab.module';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { NavItemComponent } from './layout/nav-item/nav-item.component';
import { HolidayShutdownsModule } from './holiday-shutdowns/holiday-shutdowns.module';
import { InflexibilityPeriodsModule } from './inflexibility-periods/inflexibility-periods.module';
import { SecurityService } from './service/security.service';
import { CoverageService } from './service/coverage.service';
import { LeaveService } from './service/leave.service'; import { EmployeState, Profile } from './shared/enums';
import { Employe } from './shared/dto/employe';
import { FullDayLeave } from './shared/dto/leave';
import { EmployesFlexibility } from './shared/dto/employes-flexibility';
import { EmployeAutocompleteModule } from './employe-autocomplete/employe-autocomplete.module';
import { LeavesApprovationModule } from './leaves-approvation/leaves-approvation.module';
import { ApplicationSharedData } from './shared/application-shared-data';
import { leaves2018mocks, flexibilityCompositionObj } from './shared/tests-mocks/mocks';

/*jasmine.getEnv().addReporter({
  specStarted: function(result) {
      console.log(result.fullName);
  }
});*/

const employe = new Employe();
employe.id = 12;
employe.name = 'name';
employe.surname = 'surname';
employe.profile = Profile.Normal;
employe.currentYearLeaves = 12;


let fixture: ComponentFixture<AppComponent>;
let app: any;
let securityService: SecurityService;
let coverageService: CoverageService;
let leaveService: LeaveService;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SecurityService, CoverageService, LeaveService, { provide: APP_BASE_HREF, useValue: '/' }],
      declarations: [
        AppComponent,
        FullYearLeavesComponent,
        FullYearLeavesOverlapsComponent,
        NotFoundComponent,
        AccessDeniedComponent,
        NavMenuComponent,
        NavItemComponent,
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        NgbModalModule.forRoot(),
        CalendarModule.forRoot(),
        ToastrModule.forRoot({
          timeOut: 5000,
          progressBar: true,
          positionClass: 'toast-bottom-center'
        }),
        UsedMaterialModule,
        LeavesTabSetModule,
        DashboardModule,
        EmployeAutocompleteModule,
        FabModule,
        BlockUIModule,
        HolidayShutdownsModule,
        InflexibilityPeriodsModule,
        LeavesApprovationModule,
        AppRoutingModule
      ],
    });
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [
          FullYearLeavesComponent,
          FullYearLeavesOverlapsComponent,
          NotFoundComponent,
          AccessDeniedComponent
        ],
      },
    });
    TestBed.compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    securityService = fixture.debugElement.injector.get(SecurityService);
    coverageService = fixture.debugElement.injector.get(CoverageService);
    leaveService = fixture.debugElement.injector.get(LeaveService);

    const spyFlexibility = spyOn(coverageService, 'searchFlexibility')
      .and.returnValue(Promise.resolve(flexibilityCompositionObj));

    const spyOverlaps = spyOn(coverageService, 'searchGaps')
      .and.returnValue(Promise.resolve(new Array<CalendarEvent>()));

    const spyYearLeave = spyOn(leaveService, 'getYearLeaves')
      .and.returnValue(Promise.resolve(leaves2018mocks));

    const spyLeaves = spyOn(leaveService, 'getLeaves')
      .and.returnValue(Promise.resolve(leaves2018mocks));

    const spyLogout = spyOn(securityService, 'logout')
      .and.returnValue(Promise.resolve({}));
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('Current view should be FullYearLeavesComponent', () => {
    const spy = spyOn(securityService, 'getLoggedEmploye')
      .and.returnValue(Promise.resolve(employe));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(app.currentView).toBe(FullYearLeavesComponent, 'View for normal user created!');
    });
  });

  it('Current view should be FullYearLeavesOverlapsComponent', () => {
    employe.profile = Profile.Manager;
    const spy = spyOn(securityService, 'getLoggedEmploye')
      .and.returnValue(Promise.resolve(employe));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.currentView).toBe(FullYearLeavesOverlapsComponent, 'View for manager user created!');
    });
  });

  it('Toggle change view to FullYearLeavesComponent', () => {
    const spy = spyOn(securityService, 'getLoggedEmploye')
      .and.returnValue(Promise.resolve(employe));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.currentView).toBe(FullYearLeavesOverlapsComponent, 'View for manager user created!');
      app['toggleLeavesCoverage'].call(app);
      expect(app.currentView).toBe(FullYearLeavesComponent, 'Toggle to leave view');
    });
  });

  it('Toggle change view to FullYearLeavesOverlapsComponent', () => {
    employe.profile = Profile.Normal;
    const spy = spyOn(securityService, 'getLoggedEmploye')
      .and.returnValue(Promise.resolve(employe));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.currentView).toBe(FullYearLeavesComponent, 'View for normal user created!');
      app['toggleLeavesCoverage'].call(app);
      expect(app.currentView).toBe(FullYearLeavesOverlapsComponent, 'Toggle to leaveoverlaps view');
    });
  });

  it('Current view should be AccessDeniedComponent', () => {
    const spy = spyOn(securityService, 'getLoggedEmploye')
      .and.returnValue(Promise.resolve(undefined));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.currentView).toBe(AccessDeniedComponent, 'Accces denied created not created');
    });
  });

  it('Current view should be FullYearLeavesComponent and fire search empploye', () => {
    const employeLeaves = new EmployeLeaves(2, 'surname name');
    const sub = ApplicationSharedData.getInstance().getEmpAutoCompInjectSearch().subscribe(searchTerm => {
      expect(searchTerm).toBe(employeLeaves.fullName, 'Employe search not fired');
      sub.unsubscribe();
      ApplicationSharedData.getInstance().setEmpAutoCompInjectSearch(null);
    });

    employe.profile = Profile.Manager;
    const spy = spyOn(securityService, 'getLoggedEmploye').and.returnValue(Promise.resolve(employe));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      app['goToEmploeLeaves'].call(app, employeLeaves);
      fixture.detectChanges();
      expect(app.currentView).toBe(FullYearLeavesComponent, 'Current view is FullYearLeavesComponent');
    });
  });

  it('Current view should be undefined after logout', () => {
    employe.profile = Profile.Normal;
    const spy = spyOn(securityService, 'getLoggedEmploye')
      .and.returnValue(Promise.resolve(employe));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      app['logout'].call(app);
      fixture.detectChanges();
      expect(app.currentView).toBe(undefined, 'Current view is not undefined after logout');
    });
  });
});
