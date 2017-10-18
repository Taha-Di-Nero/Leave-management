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
import { CoverageService } from './service/coverage.service';
import { SecurityService } from './service/security.service';
import { LeaveService } from './service/leave.service';
import { LeavesApprovationModule } from './leaves-approvation/leaves-approvation.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 20000,
      progressBar: true,
      progressAnimation: 'decreasing',
      closeButton: true,
      enableHtml: true,
      positionClass: 'toast-bottom-center'
    }),
    UsedMaterialModule,
    LayoutModule,
    FullYearLeavesOverlapsModule,
    FullYearLeavesModule,
    NotFoundModule,
    AccessDeniedModule,
    FabModule,
    BlockUIModule,
    HolidayShutdownsModule,
    InflexibilityPeriodsModule,
    LeavesApprovationModule,
    AppRoutingModule
  ],
  providers: [
    SecurityService,
    CoverageService,
    LeaveService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
