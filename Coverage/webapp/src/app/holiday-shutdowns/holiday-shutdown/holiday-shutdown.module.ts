import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsedMaterialModule } from '../../shared/used-material.module';
import { HolidayShutdownComponent } from './holiday-shutdown.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    UsedMaterialModule,
  ],
  declarations: [
    HolidayShutdownComponent
  ],
  exports: [
    HolidayShutdownComponent
  ]
})
export class HolidayShutdownModule { }
