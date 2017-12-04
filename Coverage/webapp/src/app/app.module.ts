import 'hammerjs';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { ToastrModule } from 'ngx-toastr';
import { CalendarModule } from 'angular-calendar';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule } from 'ng-block-ui';

import { FullYearLeavesModule } from './full-year-leaves/full-year-leaves.module';
import { AppComponent } from './app.component';
import { FullYearLeavesOverlapsModule } from './full-year-leaves-overlaps/full-year-leaves-overlaps.module';
import { AppRoutingModule } from './app-routing.module';
import { UsedMaterialModule } from './shared/used-material.module';
import { NotFoundModule } from './not-found/not-found.module';
import { AccessDeniedModule } from './access-denied/access-denied.module';
import { FabModule } from './fab/fab.module';
import { HolidayShutdownsModule } from './holiday-shutdowns/holiday-shutdowns.module';
import { InflexibilityPeriodsModule } from './inflexibility-periods/inflexibility-periods.module';
import { CoverageService } from './service/coverage.service';
import { SecurityService } from './service/security.service';
import { LeaveService } from './service/leave.service';
import { LeavesApprovationModule } from './leaves-approvation/leaves-approvation.module';
import { LayoutModule } from './layout/layout.module';
import { EmployesModule } from './employes/employes.module';
import { BaseInterceptor } from './service/base.interceptor';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    NgbModule.forRoot(),
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    ToastrModule.forRoot({
      maxOpened: 1,
      autoDismiss: true,
      timeOut: 10000,
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
    EmployesModule,
    LeavesApprovationModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseInterceptor,
      multi: true,
    },
    SecurityService,
    CoverageService,
    LeaveService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
