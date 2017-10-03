import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

import { UsedMaterialModule } from '../../shared/used-material.module';
import { HolidayShutdownListComponent } from './holiday-shutdown-list.component';
import { HolidayShutdownModule } from '../holiday-shutdown/holiday-shutdown.module';
import { HolidayShutdownsService } from '../../service/holiday-shutdowns.service';
import { NgbDateFRParserFormatter } from '../../shared/ngb-date-fr-parser-formatter';
import { I18n, ItalianDatepickerI18n } from '../../shared/italianDatepickerI18n';

@NgModule({
  providers: [HolidayShutdownsService,
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
    HolidayShutdownModule,
    UsedMaterialModule,
  ],
  declarations: [
    HolidayShutdownListComponent
  ],
  exports: [
    HolidayShutdownListComponent
  ]
})
export class HolidayShutdownListModule { }
