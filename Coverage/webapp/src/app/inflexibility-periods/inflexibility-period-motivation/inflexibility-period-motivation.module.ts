import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InflexibilityPeriodMotivationComponent } from './inflexibility-period-motivation.component';
import { UsedMaterialModule } from '../../shared/used-material.module';
import { InflexibilityPeriodsService } from '../../service/inflexibility-periods.service';



@NgModule({
  providers: [InflexibilityPeriodsService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    UsedMaterialModule
  ],
  declarations: [
    InflexibilityPeriodMotivationComponent
  ],
  exports: [
    InflexibilityPeriodMotivationComponent
  ]
})

export class InflexibilityPeriodMotivationModule { }
