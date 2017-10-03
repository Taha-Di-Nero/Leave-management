import 'hammerjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { CalendarModule } from 'angular-calendar';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule } from 'ng-block-ui';

import { FullYearLeavesModule } from './full-year-leaves/full-year-leaves.module';
import { AppComponent } from './app.component';
import { FullYearLeavesOverlapsModule } from './full-year-leaves-overlaps/full-year-leaves-overlaps.module';
import { AppRoutingModule } from './app-routing.module';
import { UsedMaterialModule } from './shared/used-material.module';
import { FlexibilityPieModule } from './dashboard/flexibility-pie/flexibility-pie.module';
import { YearsCoverageModule } from './dashboard/years-coverage/years-coverage.module';
import { FabComponent } from './fab/fab.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { FullYearLeavesOverlapsComponent } from './full-year-leaves-overlaps/full-year-leaves-overlaps.component';
import { FullYearLeavesComponent } from './full-year-leaves/full-year-leaves.component';
import { NotFoundModule } from './not-found/not-found.module';
import { AccessDeniedModule } from './access-denied/access-denied.module';
import { FabModule } from './fab/fab.module';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { NavItemComponent } from './layout/nav-item/nav-item.component';
import { HolidayShutdownListModule } from './holiday-shutdowns/holiday-shutdown-list/holiday-shutdown-list.module';
import { InflexibilityPeriodListModule } from './inflexibility-periods/inflexibility-period-list/inflexibility-period-list.module';
import { CoverageService } from './service/coverage.service';
import { SecurityService } from './service/security.service';
import { LeaveService } from './service/leave.service';

@NgModule({
  declarations: [
    AppComponent,
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
      timeOut: 1200000,
      extendedTimeOut: 2000,
      progressBar: true,
      closeButton: true,
      enableHtml: true,
      positionClass: 'toast-bottom-center'
    }),
    UsedMaterialModule,
    FullYearLeavesOverlapsModule,
    FullYearLeavesModule,
    NotFoundModule,
    AccessDeniedModule,
    FabModule,
    BlockUIModule,
    HolidayShutdownListModule,
    InflexibilityPeriodListModule,
    AppRoutingModule
  ],
  providers: [SecurityService, CoverageService, LeaveService],
  bootstrap: [AppComponent],
  entryComponents: [
    FullYearLeavesOverlapsComponent,
    FullYearLeavesComponent,
    NotFoundComponent,
    AccessDeniedComponent
  ]
})
export class AppModule { }
