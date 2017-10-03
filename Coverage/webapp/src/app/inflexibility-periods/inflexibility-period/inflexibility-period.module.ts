import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsedMaterialModule } from '../../shared/used-material.module';
import { InflexibilityPeriodComponent } from './inflexibility-period.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    UsedMaterialModule,
  ],
  declarations: [
    InflexibilityPeriodComponent
  ],
  exports: [
    InflexibilityPeriodComponent
  ]
})
export class InflexibilityPeriodModule { }
