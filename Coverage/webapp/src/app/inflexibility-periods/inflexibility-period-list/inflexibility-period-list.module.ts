import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

import { UsedMaterialModule } from '../../shared/used-material.module';
import { InflexibilityPeriodListComponent } from './inflexibility-period-list.component';
import { InflexibilityPeriodModule } from '../inflexibility-period/inflexibility-period.module';
import { InflexibilityPeriodsService } from '../../service/inflexibility-periods.service';
import { NgbDateFRParserFormatter } from '../../shared/ngb-date-fr-parser-formatter';
import { I18n, ItalianDatepickerI18n } from '../../shared/italianDatepickerI18n';
import { EmployeAutocompleteModule } from '../../employe-autocomplete/employe-autocomplete.module';
import { InflexibilityPeriodMotivationModule } from '../inflexibility-period-motivation/inflexibility-period-motivation.module';

@NgModule({
  providers: [InflexibilityPeriodsService,
    {provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter},
    I18n,
    {provide: NgbDatepickerI18n, useClass: ItalianDatepickerI18n}
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    InflexibilityPeriodModule,
    EmployeAutocompleteModule,
    InflexibilityPeriodMotivationModule,
    UsedMaterialModule,
  ],
  declarations: [
    InflexibilityPeriodListComponent
  ],
  exports: [
    InflexibilityPeriodListComponent
  ]
})
export class InflexibilityPeriodListModule { }
