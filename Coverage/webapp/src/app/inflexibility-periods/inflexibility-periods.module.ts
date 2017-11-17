import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

import { UsedMaterialModule } from '../shared/used-material.module';
import { InflexibilityPeriodListComponent } from './inflexibility-period-list/inflexibility-period-list.component';
import { InflexibilityPeriodComponent } from './inflexibility-period/inflexibility-period.component';
import { InflexibilityPeriodMotivationComponent } from './inflexibility-period-motivation/inflexibility-period-motivation.component';
import { InflexibilityPeriodsService } from '../service/inflexibility-periods.service';
import { NgbDateITParserFormatter } from '../shared/ngb-date-it-parser-formatter';
import { I18n, ItalianDatepickerI18n } from '../shared/italianDatepickerI18n';
import { EmployeAutocompleteModule } from '../employe-autocomplete/employe-autocomplete.module';

@NgModule({
  providers: [InflexibilityPeriodsService,
    {provide: NgbDateParserFormatter, useClass: NgbDateITParserFormatter},
    I18n,
    {provide: NgbDatepickerI18n, useClass: ItalianDatepickerI18n}
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    EmployeAutocompleteModule,
    UsedMaterialModule,
  ],
  declarations: [
    InflexibilityPeriodComponent,
    InflexibilityPeriodMotivationComponent,
    InflexibilityPeriodListComponent
  ],
  exports: [
    InflexibilityPeriodListComponent,
    InflexibilityPeriodComponent,
    InflexibilityPeriodMotivationComponent
  ]
})
export class InflexibilityPeriodsModule { }
